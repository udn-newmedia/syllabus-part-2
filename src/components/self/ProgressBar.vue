<template>
  <div class="about">
    <h1>Progress</h1>
    <div
      class="progressbar_clickable"
      @click="forceMoving"
      :style="{backgroundImage:`url(${barImg})`}"
    >
      <span :style="{top:`${ballPosition}%`}" />
    </div>
    <div class="article-list">
      <p
        v-for="article in data"
        :key="article.id"
        :style="{height:`${article.height}`}"
      >{{article.title}}</p>
    </div>
  </div>
</template>

<script>
import content from '../../data/content'

export default {
  name: 'ProgressBar',
  data() {
    return {
      data: content.page2Articles,
      barImg: content.progress.img,
      progress: 0.0
    }
  },
  computed: {
    ballPosition() {
      const position = this.progress
      const { innerHeight } = window

      // the height of ball is 30px
      return position * (1 - 30 / innerHeight)
    }
  },
  methods: {
    handleScroll() {
      const { scrollTop } = document.documentElement
      const { innerHeight } = window
      const bodyHeight = document.body.offsetHeight
      const result = (scrollTop * 100) / (bodyHeight - innerHeight)

      this.progress = result
    },
    forceMoving(event) {
      const { innerHeight, scrollTo } = window
      const bodyHeight = document.body.offsetHeight
      const clickPoint = (event.offsetY * 100) / innerHeight

      //   scrollTo({
      //     top: ((bodyHeight - innerHeight) * clickPoint) / 100,
      //     behavior: 'smooth'
      //   })
      scrollTo(0, ((bodyHeight - innerHeight) * clickPoint) / 100)
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="scss" scoped>
.progressbar_clickable {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 30px;
  z-index: 10;
  background: #999;
  & > span {
    position: fixed;
    left: 0;
    background: red;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    z-index: 2;
  }
}
</style>
