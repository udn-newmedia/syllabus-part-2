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
import content from '../../../data/content'

import PCPart1 from './PCPart1'
import PCPart2 from './PCPart2'
import PCPart3 from './PCPart3'
import PCPart4 from './PCPart4'
import PCPart5 from './PCPart5'
import PCPart6 from './PCPart6'
import PCPart7 from './PCPart7'
import PCPart8 from './PCPart8'
import PCPart9 from './PCPart9'
import PCPart10 from './PCPart10'
import PCPart11 from './PCPart11'
import EndPage from './EndPage'

export default {
  name: 'TimelinePC',
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
    const { innerWidth } = window
    const activeArray = []
    const pageNumber = {
      length: 0,
      startLength: 2.4547,
      endLength: 1,
    }

    const accumulationArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    const widthArray = [
      100,
      145.47,
      ((1556 + 200) * 100) / innerWidth,
      ((1347 + 200) * 100) / innerWidth,
      ((1556 + 200) * 100) / innerWidth,
      ((1917 + 200) * 100) / innerWidth,
      ((2126 + 200) * 100) / innerWidth,
      ((650 + 200) * 100) / innerWidth,
      ((1917 + 200) * 100) / innerWidth,
      ((1917 + 200) * 100) / innerWidth,
      ((986 + 200) * 100) / innerWidth,
      100,
    ]
    for (let i = 0; i < widthArray.length; i += 1) {
      pageNumber.length = pageNumber.length + widthArray[i] / 100
      if (i === 0) {
        accumulationArray[i] = widthArray[i]
      } else {
        accumulationArray[i] = widthArray[i] + accumulationArray[i - 1]
      }
    }
    // P1:100vw
    // P2:145.47vw
    // P3:132.5vw >> (500+70+500+70+416)px=1556px
    // P4:110.39vw >> (500+70+777)px=1347px
    // P5:125.47vw >> (500+70+500+70+416)px=1556px
    // P6:153.67vw >> (500+70+500+70+777)px=1917px
    // P7:176.8vw >> (500+70+500+70+500+70+416)px=2126px
    // P8:66.4vw >> 650px
    // P9:153.67vw >> (500+70+500+70+777)px=1917px
    // P10:153.67vw >> (500+70+500+70+777)px=1917px
    // P11:83.44vw >> (500+70+416)px=986px
    // end:100vw
    //
    // sum:1501.48vw >> 345.47vw + 13972px

    for (let i = 0; i < accumulationArray.length; i += 1) {
      if (i === 1) {
        activeArray.push([false, false])
      } else {
        activeArray.push(false)
      }
    }

    return {
      activeArray,
      imgs: content.timelineImgs,
      progress: 0.0,
      bottom: 0,
      pageNumber,
      accumulationArray,
      listWidth: pageNumber.length * 100,
      widthArray,
    }
  },
  methods: {
    updateProgress() {
      const containerTop = this.$refs.timeLineContainer.offsetTop
      const containerHeight = this.$refs.timeLineContainer.offsetHeight
      const containBottom = containerTop + containerHeight
      const listHeight = this.$refs.timeLineList.offsetHeight
      // const { scrollTop } = document.documentElement
      const { pageYOffset, innerHeight } = window
      const scrollBottom = pageYOffset + innerHeight
      // const bodyHeight = document.body.offsetHeight

      const allHeight = containerHeight - listHeight
      // count the progress
      const progress = ((pageYOffset - containerTop) * 100) / allHeight

      this.progress = progress
      // count the distance for bottom after leaving the area
      this.bottom = scrollBottom - containBottom

      // count active
      const allLength = this.accumulationArray[
        this.accumulationArray.length - 1
      ]
      for (let i = 0; i < this.accumulationArray.length; i += 1) {
        if (i === 0) {
          this.activeArray[i] = true
        } else if (i === 1) {
          if (
            this.progress >
            (this.accumulationArray[0] * 0.5 * 100) / allLength
          ) {
            // this.activeArray[i] = true
            this.activeArray[i] = [true, false]
          }
          if (this.progress > (this.accumulationArray[0] * 100) / allLength) {
            // this.activeArray[i] = true
            this.activeArray[i] = [true, true]
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
            this.activeArray[i] = true
          }
        }
      }
    },
  },
  computed: {
    areaTranslateX() {
      if (this.progress < 100) {
        return this.progress * (1 - 1 / this.pageNumber.length) * -1
      }
      return 100 * (1 - 1 / this.pageNumber.length) * -1
    },
    bottomDistance() {
      if (this.progress <= 100) {
        return 0
      }
      return this.bottom
    },
  },
  created() {
    window.addEventListener('scroll', this.updateProgress)
    // window.addEventListener("resize", this.countListWidth);
  },
  mounted() {
    this.updateProgress()
    // this.countListWidth();
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateProgress)
    // window.removeEventListener("resize", this.countListWidth);
  },
}
</script>
<style lang="scss" scoped>
@media (max-width: 576px) {
  .timeline-text {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

.time-spot {
  padding: 0 10px 0 30px;
  position: relative;
}
.time-spot::after {
  content: '';
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
  background-image: url('../../../assets/img/timeline/backgroung.jpg');
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: 48px;
}
.time-line-list {
  z-index: 2;
  list-style: none;
  display: flex;
  &::before {
    content: '';
    position: absolute;
    top: calc(21.67% + 20px);
    left: 245.47vw;
    height: 1px;
    // sum of part3 to part11
    width: calc(15772px - 100px);
    // @media screen and (min-width: ){

    // }
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
<style lang="scss">
.ScrollDownArrow {
  .arrows {
    cursor: auto !important;
  }
}
</style>
