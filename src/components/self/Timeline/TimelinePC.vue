<template>
  <div
    class="time-line-container"
    :style="{
      height: `calc(${pageNumber.length * 100}vh)`,
    }"
    ref="timeLineContainer"
  >
    <ul
      class="time-line-list"
      :style="{
        width: `${listWidth}vw`,
        transform:
          progress >= 0 ? `translateX(${areaTranslateX}%)` : 'translateX(0%)',
        position: progress >= 0 ? 'fixed' : 'static',
        bottom: `${bottomDistance}px`,
      }"
      ref="timeLineList"
    >
      <li>
        <PCPart1 :img="imgs.part1" />
      </li>
      <li>
        <PCPart2 :active="activeArray[1]" :img="imgs.part2" />
      </li>
      <li class="timeline-li time-spot">
        <PCPart3 :active="activeArray[2]" :img="imgs.part3" />
      </li>
      <li class="timeline-li time-spot">
        <PCPart4 :active="activeArray[3]" :img="imgs.part4" />
      </li>
      <li class="timeline-li time-spot">
        <PCPart5 :active="activeArray[4]" :img="imgs.part5" />
      </li>
      <li class="timeline-li time-spot">
        <PCPart6 :active="activeArray[5]" :img="imgs.part6" />
      </li>
      <li class="timeline-li time-spot">
        <PCPart7 :active="activeArray[6]" :img="imgs.part7" />
      </li>
      <li>
        <PCPart8 :active="activeArray[7]" />
      </li>
      <li class="timeline-li time-spot">
        <PCPart9 :active="activeArray[8]" :img="imgs.part9" />
      </li>
      <li class="timeline-li time-spot">
        <PCPart10 :active="activeArray[9]" :img="imgs.part10" />
      </li>
      <li class="timeline-li time-spot">
        <PCPart11 :active="activeArray[10]" :img="imgs.part11" />
      </li>
      <li>
        <EndPage />
      </li>
    </ul>
  </div>
</template>

<script>
import content from "../../../data/content";

import PCPart1 from "./PCPart1";
import PCPart2 from "./PCPart2";
import PCPart3 from "./PCPart3";
import PCPart4 from "./PCPart4";
import PCPart5 from "./PCPart5";
import PCPart6 from "./PCPart6";
import PCPart7 from "./PCPart7";
import PCPart8 from "./PCPart8";
import PCPart9 from "./PCPart9";
import PCPart10 from "./PCPart10";
import PCPart11 from "./PCPart11";
import EndPage from "./EndPage";

export default {
  name: "TimelinePC",
  components: {
    PCPart1,
    PCPart2,
    PCPart3,
    PCPart4,
    PCPart5,
    PCPart6,
    PCPart7,
    PCPart8,
    PCPart9,
    PCPart10,
    PCPart11,
    EndPage,
  },
  data() {
    const activeArray = [];
    const pageNumber = {
      length: 15.0148,
      startLength: 2.4547,
      endLength: 1,
    };

    const accumulationArray = [
      100,
      245.47,
      377.97,
      488.36,
      613.83,
      767.5,
      944.3,
      1010.7,
      1164.37,
      1318.04,
      1401.48,
      1501.48,
    ];
    // P1:100vw
    // P2:145.47vw
    // P3:132.5vw
    // P4:110.39vw
    // P5:125.47vw
    // P6:153.67vw
    // P7:176.8vw
    // P8:66.4vw
    // P9:153.67vw
    // P10:153.67vw
    // P11:83.44vw
    // end:100vw
    //
    // sum:1501.48vw

    for (let i = 0; i < accumulationArray.length; i += 1) {
      activeArray.push(false);
    }

    return {
      activeArray,
      imgs: content.timelineImgs,
      progress: 0.0,
      bottom: 0,
      pageNumber,
      accumulationArray,
      listWidth: 1501.48,
    };
  },
  methods: {
    updateProgress() {
      const containerTop = this.$refs.timeLineContainer.offsetTop;
      const containerHeight = this.$refs.timeLineContainer.offsetHeight;
      const containBottom = containerTop + containerHeight;
      const listHeight = this.$refs.timeLineList.offsetHeight;
      const { scrollTop } = document.documentElement;
      const { innerHeight } = window;
      const scrollBottom = scrollTop + innerHeight;
      // const bodyHeight = document.body.offsetHeight

      const allHeight = containerHeight - listHeight;
      // count the progress
      const progress = ((scrollTop - containerTop) * 100) / allHeight;

      this.progress = progress;
      // count the distance for bottom after leaving the area
      this.bottom = scrollBottom - containBottom;

      // count active
      const allLength = this.accumulationArray[
        this.accumulationArray.length - 1
      ];
      for (let i = 0; i < this.accumulationArray.length; i += 1) {
        if (i === 0) {
          this.activeArray[i] = true;
        } else if (i === 1) {
          if (
            this.progress >
            (this.accumulationArray[0] * 0.75 * 100) / allLength
          ) {
            this.activeArray[i] = true;
          }
        } else {
          if (
            this.progress >
            ((this.accumulationArray[i - 2] +
              (this.accumulationArray[i - 1] - this.accumulationArray[i - 2]) *
                0.75) *
              100) /
              allLength
          ) {
            this.activeArray[i] = true;
          }
        }
      }
    },
    countListWidth() {
      const { innerWidth } = window;

      if (innerWidth <= 1280) {
        this.listWidth =
          this.pageNumber.length * 100 + 50 + 0.1588 * (1280 - innerWidth);
      } else {
        this.listWidth =
          this.pageNumber.length * 100 + 50 - 0.09 * (innerWidth - 1280);
      }
    },
  },
  computed: {
    areaTranslateX() {
      if (this.progress < 100) {
        return this.progress * -1;
      }
      return 100 * -1;
      // if (this.progress < 100) {
      //   return this.progress * -(1 - 1 / this.pageNumber.length)
      // }
      // return 100 * -(1 - 1 / this.pageNumber.length)
    },
    bottomDistance() {
      if (this.progress <= 100) {
        return 0;
      }
      return this.bottom;
    },
  },
  created() {
    window.addEventListener("scroll", this.updateProgress);
    window.addEventListener("resize", this.countListWidth);
  },
  mounted() {
    this.updateProgress();
    this.countListWidth();
  },
  destroyed() {
    window.removeEventListener("scroll", this.updateProgress);
    window.removeEventListener("resize", this.countListWidth);
  },
};
</script>
<style lang="scss" scoped>
@media (max-width: 576px) {
  .timeline-text {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}
.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}
.time-spot {
  padding: 0 10px 0 30px;
  position: relative;
}
.time-spot::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  top: 21.67%;
  left: 100px;
  background-color: #00ccb1;
  border: 4px solid #00ccb1;
  border-radius: 50%;
}

// timeline-area
.time-line-container {
  overflow: hidden;
  background-image: url("../../../assets/bg/bg01.jpg");
  background-repeat: repeat;
  background-attachment: fixed;
}
.time-line-list {
  z-index: 2;
  list-style: none;
  display: flex;
  &::before {
    content: "";
    position: absolute;
    top: calc(21.67% + 20px);
    left: 245.47vw;
    height: 1px;
    width: 83%;
    background-color: #8f8f8f;
  }
  li {
    list-style-type: none;
    // min-width: 100vw;
    height: 100vh;
  }
}

.timeline-li {
  padding: 0 100px; // each part distance 200px
  & > .timeline-text {
    position: absolute;
    top: 45%;
    left: 19%;
    max-width: 25%;
  }
  & > .timeline-img {
    position: absolute;
    top: 45%;
    max-width: 25%;
    border-radius: 10%;
    opacity: 0;
    z-index: 2;
  }
  & > .up {
    transform: translateY(50%);
  }
  & > .down {
    transform: translateY(-50%);
  }
  &.active {
    & > .timeline-img {
      transform: translateY(0%);
      opacity: 1;
    }
    & > .up {
      animation: GoUp;
      animation-duration: 3000ms;
    }
    & > .down {
      animation: GoDown;
      animation-duration: 3000ms;
    }
  }
}
@media (max-width: 768px) {
  .timeline-li {
    & > .timeline-text {
      max-width: 100%;
    }
    & > .timeline-img {
      max-width: 50%;
      top: 10%;
    }
  }
}
@media (max-width: 576px) {
  .timeline-li {
    & > .timeline-text {
      padding: 10px;
    }
    & > .timeline-img {
      left: 19%;
      max-width: 80%;
    }
  }
}

@keyframes GoUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}
@keyframes GoDown {
  from {
    transform: translateY(-100%);
    opacity: 1;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
