<template>
  <div
    class="time-line-container"
    :style="{
      height: `calc(${pageNumber.length * 100}vh)`
    }"
    ref="timeLineContainer"
  >
    <div
      class="time-line"
      :style="[
        timelinePostion,
        { width: `${(pageNumber.length - pageNumber.startLength - pageNumber.endLength) * 100}vw` }
      ]"
    />
    <ul
      class="time-line-list"
      :style="{
        width: `${pageNumber.length * 100}vw`,
        transform: progress >= 0 ? `translateX(${areaTranslateX}%)` : 'translateX(0%)',
        position: progress >= 0 ? 'fixed' : 'static',
        bottom: `${bottomDistance}px`
      }"
      ref="timeLineList"
    >
      <li>
        <PCPart1 />
      </li>
      <li>
        <PCPart2 :active="activeArray[1]" />
      </li>
      <li class="timeline-li time-spot">
        <PCPart3 :active="activeArray[2]" />
      </li>
      <li class="timeline-li time-spot">
        <PCPart4 :active="activeArray[3]" />
      </li>
      <li class="timeline-li time-spot">
        <PCPart5 />
      </li>
      <li class="timeline-li time-spot" style="width:150vw">
        <PCPart6 />
      </li>
      <li class="timeline-li time-spot">
        <PCPart7 />
      </li>
      <li>
        <PCPart8 />
      </li>
      <li class="timeline-li time-spot" style="width:150vw">
        <PCPart9 />
      </li>
      <li class="timeline-li time-spot" style="width:150vw">
        <PCPart10 />
      </li>
      <li class="timeline-li time-spot" style="width:100vw">
        <PCPart11 />
      </li>
      <li style="width:100vw">
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
    EndPage
  },
  data() {
    const activeArray = []
    const pageNumber = {
      length: 1 * 9 + 1.5 * 3,
      startLength: 2,
      endLength: 1
    }
    for (let i = 0; i < pageNumber.length; i += 1) {
      activeArray.push(false)
    }

    // P1:100vw
    // P2:145.47vw
    // P3:132.5vw
    // P4:110.39vw
    // P5:125.47vw
    // P6:153.67vw
    return {
      activeArray,
      data: content.timeline,
      progress: 0.0,
      bottom: 0,
      pageNumber,
      timelinePostion: {}
    }
  },
  methods: {
    updateProgress() {
      const containerTop = this.$refs.timeLineContainer.offsetTop
      const containerHeight = this.$refs.timeLineContainer.offsetHeight
      const containBottom = containerTop + containerHeight
      const listHeight = this.$refs.timeLineList.offsetHeight
      const { scrollTop } = document.documentElement
      const { innerHeight } = window
      const scrollBottom = scrollTop + innerHeight
      const bodyHeight = document.body.offsetHeight

      const allHeight = containerHeight - listHeight
      // count the progress
      const progress = ((scrollTop - containerTop) * 100) / allHeight

      this.progress = progress
      // count the distance for bottom after leaving the area
      this.bottom = scrollBottom - containBottom

      // count timeline position
      const distanceTopEntering = containerTop - scrollTop
      const distanceBottom =
        scrollTop + innerHeight - (containerTop + containerHeight)
      const distanceTopleaving = containerTop + containerHeight - scrollTop
      const timelineShift = { left: 0, top: 0.235 }

      // not yet
      if (distanceTopEntering >= 0) {
        this.timelinePostion = {
          top: `${distanceTopEntering + timelineShift.top * innerHeight}px`,
          right: `${-100 *
            (this.pageNumber.length -
              this.pageNumber.startLength -
              this.pageNumber.endLength +
              1) -
            timelineShift.left}vw`
        }
        // over
      } else if (distanceBottom >= 0) {
        this.timelinePostion = {
          top: `${distanceTopleaving -
            (1 - timelineShift.top) * innerHeight}px`,
          right: `${100 *
            (this.pageNumber.startLength + this.pageNumber.endLength - 2) -
            timelineShift.left}vw`
        }
        // in the process
      } else {
        this.timelinePostion = {
          top: `${0 + timelineShift.top * innerHeight}px`,
          right: `${progress * (this.pageNumber.length - 1) -
            100 *
              (this.pageNumber.length -
                this.pageNumber.startLength -
                this.pageNumber.endLength +
                1) -
            timelineShift.left}vw`
        }
      }

      // count active
      for (let i = 0; i < this.pageNumber.length; i += 1) {
        if (this.progress > ((i - 0.5) * 100) / this.pageNumber.length) {
          this.activeArray[i] = true
        }
      }
    },
    active(index) {
      if (this.activeArray[index + this.pageNumber.startLength]) {
        return 'active'
      }
      // if (this.progress > (index * 100) / this.data.length) {
      //   return 'active'
      // }
      return ''
    }
  },
  computed: {
    areaTranslateX() {
      if (this.progress < 100) {
        return this.progress * -(1 - 1 / this.pageNumber.length)
      }
      return 100 * -(1 - 1 / this.pageNumber.length)
    },
    bottomDistance() {
      if (this.progress <= 100) {
        return 0
      }
      return this.bottom
    }
  },
  created() {
    window.addEventListener('scroll', this.updateProgress)
  },
  mounted() {
    this.updateProgress()
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateProgress)
  }
}
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

.time-line {
  position: fixed;
  height: 1px;
  background-color: #8f8f8f;
  z-index: 1;
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
  background-image: url('../../../assets/bg/bg01.jpg');
  background-repeat: repeat;
  background-attachment: fixed;
}
.time-line-list {
  z-index: 2;
  list-style: none;
  display: flex;
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
