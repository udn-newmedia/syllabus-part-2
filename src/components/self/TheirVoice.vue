<template>
  <div class="voice-wrapper" ref="voiceWrapper">
    <div
      class="voice-li"
      :class="{'p-relative':!isInArea}"
      v-for="(voice,i) in data"
      :key="voice.id"
    >
      <div class="voice-image" :class="[{'p-fixed':isInArea,'active':i===activeI}]">
        <img :src="voice.img" :class="{'active':i===activeI}" />
      </div>
      <div class="voice-text" :class="[{'active':isInArea},{'inactive':!isInArea}]">
        <h2 :class="`w-${isInArea?50:100}`">{{voice.description}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import content from '../../data/content'

export default {
  name: 'TheirVoice',
  data() {
    return {
      data: content.theirVoice,
      activeI: 0,
      isInArea: false
    }
  },
  methods: {
    updateProgress() {
      const wrapperTop = this.$refs.voiceWrapper.offsetTop
      const wrapperHeight = this.$refs.voiceWrapper.offsetHeight
      const { scrollTop } = document.documentElement
      const { innerHeight } = window
      // not ready
      if (scrollTop < wrapperTop) {
        this.isInArea = false
        this.activeI = 0
      }
      // in
      if (scrollTop >= wrapperTop && scrollTop <= wrapperTop + wrapperHeight) {
        this.isInArea = true
        // count active
        const activeI =
          ((scrollTop - wrapperTop) * this.data.length) / wrapperHeight
        for (let i = 0; i < this.data.length; i += 1) {
          if (activeI >= i - 0.5 && activeI < i + 0.5) {
            this.activeI = i
          }
        }
      }
      // over
      if (scrollTop > wrapperTop + wrapperHeight - innerHeight) {
        this.isInArea = false
        this.activeI = this.data.length - 1
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.updateProgress)
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateProgress)
  }
}
</script>
<style lang="scss" scoped>
.w-100 {
  width: 100% !important;
}
.w-50 {
  width: 50% !important;
}
.p-relative {
  position: relative;
}
.p-fixed {
  position: fixed;
}

.voice-wrapper {
  width: 100vw;
  background: rgba(0, 0, 0, 1);
}
.voice-li {
  display: flex;
  justify-content: flex-end;
}

.voice-text {
  height: 100vh;
  width: 50vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  &.active {
    width: 100vw;
  }
  h2 {
    color: #fff;
    display: inline-block;
    width: 50%;
  }
}
@media (max-width: 768px) {
  .voice-text {
    &.inactive {
      width: 100vw !important;
      position: absolute;
    }
    h2 {
      width: 100% !important;
    }
  }
}

.voice-image {
  height: 100vh;
  width: 50%;
  left: 0%;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    z-index: 1;
  }
  img {
    width: 50%;
    height: 30%;
    opacity: 0;
    filter: blur(5px);
  }
  .active {
    transition: all 0.5s ease-out;
    opacity: 1;
    filter: blur(0px);
  }
}
@media (max-width: 768px) {
  .voice-image {
    width: 100%;
  }
}
</style>
