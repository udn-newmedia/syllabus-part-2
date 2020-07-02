<template>
  <div class="twinkle-container">
    <div>
      <div class="twinkle-subtitle">108課綱大調查</div>
      <h1 class="twinkle-title">升學主義 教師心中的教改殺手</h1>
    </div>

    <span
      :style="{
        top: `${message.y}%`,
        left: `${message.x}%`,
        opacity: message.opacity,
      }"
      class="twinkle-message"
      v-for="(message, i) in messages"
      @mouseenter="highlightMessage(i)"
      @mouseleave="unhighlightMessage(i)"
      :key="message.id"
    >{{ message.text }}</span>
    <div class="arrow-wrapper">
      <NmdArrow />
    </div>
  </div>
</template>

<script>
import content from '../../data/content'
import NmdArrow from '@/components/pinhead/NmdArrow.vue'
import { autoResize_3, sendGaMethods } from '@/mixins/masterBuilder.js'

export default {
  name: 'Twinkle',
  components: { NmdArrow },
  mixins: [autoResize_3, sendGaMethods],
  data() {
    const messages = []
    const fakeText = content.twinkleArticle

    for (let i = 0; i < fakeText.length * 2; i += 1) {
      messages.push({
        text: `${fakeText[i % fakeText.length]}`,
        id: `message-${i}`,
        x: Math.random() * (80 + 1),
        y: Math.random() * (95 + 1),
        opacity: 0,
      })
    }
    return { messages }
  },
  methods: {
    twinkleMessages() {
      for (let i = 0; i < this.messages.length; i += 1) {
        setTimeout(() => {
          this.messages[i].opacity = 1
        }, 500 * i)
      }
      for (let i = 0; i < this.messages.length; i += 1) {
        setTimeout(() => {
          this.messages[i].opacity = 0.2
        }, 500 * i + 500)
      }
    },
    highlightMessage(index) {
      if (this.messages[index].opacity === 0.2) {
        this.messages[index].opacity = 1
      }
    },
    unhighlightMessage(index) {
      if (this.messages[index].opacity === 1) {
        this.messages[index].opacity = 0.2
      }
    },
  },
  mounted() {
    this.twinkleMessages()
  },
}
</script>

<style lang="scss" scoped>
.twinkle-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  overflow: hidden;
}
.twinkle-subtitle {
  font-size: 25px;
  font-weight: bold;
  line-height: 1.36;
  text-align: left;
  color: #f5f5f5;
  @media screen and (max-width: 767.99px) {
    font-size: 24px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
.twinkle-title {
  z-index: 1000;
  font-size: 50px;
  font-weight: bold;
  line-height: 1.25;
  text-align: left;
  color: #fbfbfb;
  font-family: GenJyuuGothic-Monospace-Heavy;
  @media screen and (max-width: 767.99px) {
    font-size: 36px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
.arrow-wrapper {
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 100px;
  width: 100px;
  color: #fff;
  z-index: 999999;
}
// @media screen and (max-width: 767.99px) {
//   padding: 60px 3.9% 120px;
// }
// @media screen and (max-width: 374.99px) {
//   padding: 60px 4.4% 120px;
// }

@mixin arrow($x-distance, $direction, $zindex, $color, $top) {
  content: '';
  position: absolute;
  top: $top;
  z-index: $zindex;
  border: medium solid $color;
  @if $direction==left {
    left: $x-distance;
    border-width: 10px 10px 10px 0;
    border-color: transparent $color transparent transparent;
  } @else {
    right: $x-distance;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent $color;
  }
}
@mixin people($direction, $top: 0px, $left: -50px, $right: -60px) {
  position: absolute;
  top: $top;

  @if $direction==left {
    left: $left;
  } @else {
    right: $right;
  }
}

.twinkle-message {
  position: absolute;
  font-size: 30px;
  white-space: nowrap;
  // border: solid #fff 2px;
  // border-radius: 10px;
  // padding: 5px;
  & > span {
    position: relative;
    display: inline-block;
  }
}
@media (max-width: 576px) {
  .twinkle-message {
    font-size: 18px;
  }
}
</style>
<style lang="scss">
.ScrollDownArrow {
  .arrows {
    cursor: auto !important;
  }
}
</style>
