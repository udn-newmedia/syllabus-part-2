<template>
  <div class="twinkle-container">
    <h1 class="twinkle-title">108課綱上路周年民調結果大公開</h1>
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
    >
      {{ message.text }}
    </span>
  </div>
</template>

<script>
import content from "../../data/content";

export default {
  name: "Twinkle",
  data() {
    const messages = [];
    const fakeText = content.twinkleArticle;

    for (let i = 0; i < fakeText.length; i += 1) {
      messages.push({
        text: `${fakeText[Math.floor(Math.random() * (fakeText.length + 1))]}`,
        id: `message-${i}`,
        x: Math.random() * (80 + 1),
        y: Math.random() * (95 + 1),
        opacity: 0,
      });
    }
    for (let i = fakeText.length; i < fakeText.length * 2; i += 1) {
      messages.push({
        text: `${fakeText[Math.floor(Math.random() * (fakeText.length + 1))]}`,
        id: `message-${i}`,
        x: Math.random() * (80 + 1),
        y: Math.random() * (95 + 1),
        opacity: 0,
      });
    }
    return { messages };
  },
  methods: {
    twinkleMessages() {
      for (let i = 0; i < this.messages.length; i += 1) {
        setTimeout(() => {
          this.messages[i].opacity = 1;
        }, 500 * i);
      }
      for (let i = 0; i < this.messages.length; i += 1) {
        setTimeout(() => {
          this.messages[i].opacity = 0.2;
        }, 500 * i + 500);
      }
    },
    highlightMessage(index) {
      if (this.messages[index].opacity === 0.2) {
        this.messages[index].opacity = 1;
      }
    },
    unhighlightMessage(index) {
      if (this.messages[index].opacity === 1) {
        this.messages[index].opacity = 0.2;
      }
    },
  },
  mounted() {
    this.twinkleMessages();
  },
};
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
  content: "";
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
  // .twinkle-message-left {
  //   &::after {
  //     @include arrow(-15px, left, 1, #fff, 5px);
  //   }
  //   &::before {
  //     @include arrow(-12px, left, 2, #000, 5px);
  //   }
  //   .twinkle-people-left {
  //     @include people('left');
  //   }
  // }
  // .twinkle-message-right {
  //   .test & {
  //     color: pink;
  //   }
  //   &::after {
  //     @include arrow(-15px, right, 1, #fff, 5px);
  //   }
  //   &::before {
  //     @include arrow(-12px, right, 2, #000, 5px);
  //   }
  //   .twinkle-people-right {
  //     @include people('right');
  //   }
  // }
}
@media (max-width: 576px) {
  .twinkle-message {
    font-size: 18px;
    // .twinkle-message-left {
    //   &::after {
    //     @include arrow(-15px, left, 1, #fff, 0px);
    //   }
    //   &::before {
    //     @include arrow(-12px, left, 2, #000, 0px);
    //   }
    //   .twinkle-people-left {
    //     @include people('left', 0px, -35px, -35px);
    //   }
    // }
    // .twinkle-message-right {
    //   .test & {
    //     color: pink;
    //   }
    //   &::after {
    //     @include arrow(-15px, right, 1, #fff, 0px);
    //   }
    //   &::before {
    //     @include arrow(-12px, right, 2, #000, 0px);
    //   }
    //   .twinkle-people-right {
    //     @include people('right', 0px, -35px, -35px);
    //   }
    // }
  }
}
</style>
