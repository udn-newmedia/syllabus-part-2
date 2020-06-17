<template>
  <div class="twinkle-container">
    <h1 class="twinkle-title">汐止有什麼好吃的？</h1>
    <span
      :style="{ top: `${message.y}%`, left: `${message.x}%`, opacity: message.opacity }"
      class="twinkle-message"
      v-for="(message, i) in messages"
      @mouseenter="highlightMessage(i)"
      @mouseleave="unhighlightMessage(i)"
      :key="message.id"
    >
      <span :class="`twinkle-message-${message.direction}`">
        {{ message.text }}
        <span :class="`twinkle-people-${message.direction}`">
          <font-awesome-icon :icon="['fas', message.peopleType]" />
        </span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Twinkle',
  data() {
    const messages = []
    const fakeText = [
      '鬍鬚張有夠貴',
      '我要吃麥當勞',
      '什麼你不知道肯德基是蛋塔店',
      '譚德賽吃巧克力會咬到手嗎',
      '小蒙牛好吃嗎'
    ]
    const peopleType = [
      'blind',
      'user-injured',
      'user-graduate',
      'people-carry'
    ]
    for (let i = 0; i < 200; i += 1) {
      messages.push({
        text: `${i}：${fakeText[Math.floor(Math.random() * (4 + 1))]}`,
        id: `message-${i}`,
        x: Math.random() * (80 + 1),
        y: Math.random() * (95 + 1),
        opacity: 0,
        direction: i % 2 === 0 ? 'left' : 'right',
        peopleType: peopleType[Math.floor(Math.random() * (3 + 1))]
      })
    }
    return { messages }
  },
  methods: {
    twinkleMessages() {
      for (let i = 0; i < this.messages.length; i += 1) {
        setTimeout(() => {
          this.messages[i].opacity = 1
        }, 100 * i)
      }
      for (let i = 0; i < this.messages.length; i += 1) {
        setTimeout(() => {
          this.messages[i].opacity = 0.2
        }, 100 * i + 200)
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
    }
  },
  mounted() {
    this.twinkleMessages()
  }
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
  height: 100vh;
  overflow: hidden;
}
.twinkle-title {
  z-index: 1000;
  font-size: 100px;
}
@media (max-width: 576px) {
  .twinkle-title {
    font-size: 50px;
  }
}

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
  border: solid #fff 2px;
  border-radius: 10px;
  padding: 5px;
  & > span {
    position: relative;
    display: inline-block;
  }
  .twinkle-message-left {
    &::after {
      @include arrow(-15px, left, 1, #fff, 5px);
    }
    &::before {
      @include arrow(-12px, left, 2, #000, 5px);
    }
    .twinkle-people-left {
      @include people('left');
    }
  }
  .twinkle-message-right {
    .test & {
      color: pink;
    }
    &::after {
      @include arrow(-15px, right, 1, #fff, 5px);
    }
    &::before {
      @include arrow(-12px, right, 2, #000, 5px);
    }
    .twinkle-people-right {
      @include people('right');
    }
  }
}
@media (max-width: 576px) {
  .twinkle-message {
    font-size: 18px;
    .twinkle-message-left {
      &::after {
        @include arrow(-15px, left, 1, #fff, 0px);
      }
      &::before {
        @include arrow(-12px, left, 2, #000, 0px);
      }
      .twinkle-people-left {
        @include people('left', 0px, -35px, -35px);
      }
    }
    .twinkle-message-right {
      .test & {
        color: pink;
      }
      &::after {
        @include arrow(-15px, right, 1, #fff, 0px);
      }
      &::before {
        @include arrow(-12px, right, 2, #000, 0px);
      }
      .twinkle-people-right {
        @include people('right', 0px, -35px, -35px);
      }
    }
  }
}
</style>
