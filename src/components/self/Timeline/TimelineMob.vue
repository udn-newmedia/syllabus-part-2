<template>
  <div class="timeline-mob-all">
    <div ref="MobPart0">
      <MobPart0 :windowSize="windowSize" :img="imgs.part0" />
    </div>
    <div ref="MobPart1">
      <MobPart1 :windowSize="windowSize" :img="imgs.part1" :active="activeArray[1]" />
    </div>
    <ul class="timeline-mob">
      <li ref="MobPart2">
        <MobPart2 :windowSize="windowSize" :img="imgs.part2" :active="activeArray[2]" />
      </li>
      <li ref="MobPart3">
        <MobPart3 :windowSize="windowSize" :img="imgs.part3" :active="activeArray[3]" />
      </li>
      <li ref="MobPart4">
        <MobPart4
          :windowSize="windowSize"
          :img="imgs.part4"
          :chart="imgs.part4_0"
          :active="activeArray[4]"
        />
      </li>
      <li ref="MobPart5">
        <MobPart5 :windowSize="windowSize" :img="imgs.part5" :active="activeArray[5]" />
      </li>
      <li ref="MobPart6">
        <MobPart6 :windowSize="windowSize" :img="imgs.part6" :active="activeArray[6]" />
      </li>
      <li class="no-dot" ref="MobPart7">
        <MobPart7 :active="activeArray[7]" />
      </li>
      <li ref="MobPart8">
        <MobPart8 :windowSize="windowSize" :img="imgs.part8" :active="activeArray[8]" />
      </li>
      <li ref="MobPart9">
        <MobPart9 :windowSize="windowSize" :img="imgs.part9" :active="activeArray[9]" />
      </li>
      <li ref="MobPart10">
        <MobPart10 :windowSize="windowSize" :img="imgs.part10" :active="activeArray[10]" />
      </li>
    </ul>
    <div ref="MobEndPage">
      <MobEndPage />
    </div>
  </div>
</template>

<script>
import content from '../../../data/content'

import MobPart0 from './MobPart0'
import MobPart1 from './MobPart1'
import MobPart2 from './MobPart2'
import MobPart3 from './MobPart3'
import MobPart4 from './MobPart4'
import MobPart5 from './MobPart5'
import MobPart6 from './MobPart6'
import MobPart7 from './MobPart7'
import MobPart8 from './MobPart8'
import MobPart9 from './MobPart9'
import MobPart10 from './MobPart10'
import MobEndPage from './MobEndPage'

export default {
  name: 'TimelineMob',
  props: { windowSize: { type: Object } },
  components: {
    MobPart0,
    MobPart1,
    MobPart2,
    MobPart3,
    MobPart4,
    MobPart5,
    MobPart6,
    MobPart7,
    MobPart8,
    MobPart9,
    MobPart10,
    MobEndPage,
  },
  data() {
    const activeArray = []
    for (let i = 0; i < 12; i += 1) {
      if (i === 1) {
        activeArray.push([false, false])
      } else {
        activeArray.push(false)
      }
    }
    return { imgs: content.timelineMobImgs, activeArray, tops: [] }
  },
  methods: {
    updateProgress() {
      const { pageYOffset } = window
      const result = this.activeArray.slice()

      for (let i = 0; i < this.tops.length; i++) {
        if (i === 0) {
          result[i] = true
        } else if (i === 1) {
          if (
            pageYOffset >
            this.tops[i] + 0.1 * (this.tops[i + 1] - this.tops[i])
          ) {
            result[i] = [true, false]
          }
          if (
            pageYOffset >
            this.tops[i] + 0.4 * (this.tops[i + 1] - this.tops[i])
          ) {
            result[i] = [true, true]
          }
        } else {
          if (
            pageYOffset >
            this.tops[i] + 0.2 * (this.tops[i + 1] - this.tops[i])
          ) {
            result[i] = true
          }
        }
      }
      this.activeArray = result
    },
    countTops() {
      let tmp = 0

      Object.keys(this.$refs).forEach((key, i) => {
        // console.log(this.$refs[key].offsetHeight)
        if (i === 0) {
          this.tops[i] = 0
          tmp = this.$refs[key].offsetHeight
        } else {
          this.tops[i] = tmp
          tmp = this.$refs[key].offsetHeight + this.tops[i]
        }
      })
    },
  },
  created() {
    window.addEventListener('scroll', this.updateProgress)
  },
  mounted() {
    this.$nextTick(() => {
      this.countTops()
      this.updateProgress()
    })
  },
  updated() {
    this.$nextTick(() => {
      this.countTops()
    })
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateProgress)
  },
}
</script>

<style lang="scss" scoped>
.timeline-mob-all {
  overflow-x: hidden;
  background-image: url('../../../assets/img/timeline/backgroung.jpg');
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: 48px;
}
.timeline-mob {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 60px;
    width: 1px;
    height: 100%;
    background-color: #8f8f8f;
  }
  & > li {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 45px;
      top: 80px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #00ccb1;
    }
  }
  & > .no-dot {
    &::before {
      width: 0;
      height: 0;
    }
  }
  @media screen and (max-width: 767.99px) {
    &::before {
      left: 22px;
    }
    & > li {
      position: relative;
      &::before {
        left: 12px;
        top: 73px;
        width: 20px;
        height: 20px;
      }
    }
  }
  @media screen and (max-width: 374.99px) {
    &::before {
      left: 20px;
    }
    & > li {
      position: relative;
      &::before {
        left: 10px;
        top: 73px;
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
