<template>
  <div>
    <MobPart0 :windowSize="windowSize" :img="imgs.part0" />
    <MobPart1 :windowSize="windowSize" :img="imgs.part1" />
    <ul class="timeline-mob">
      <li>
        <MobPart2 :windowSize="windowSize" :img="imgs.part2" />
      </li>
      <li>
        <MobPart3 :windowSize="windowSize" :img="imgs.part3" />
      </li>
      <li>
        <MobPart4 :windowSize="windowSize" :img="imgs.part4" :chart="imgs.part4_0" />
      </li>
      <li>
        <MobPart5 :windowSize="windowSize" :img="imgs.part5" />
      </li>
      <li>
        <MobPart6 :windowSize="windowSize" :img="imgs.part6" />
      </li>
      <li class="no-dot">
        <MobPart7 />
      </li>
      <li>
        <MobPart8 :windowSize="windowSize" :img="imgs.part8" />
      </li>
      <li>
        <MobPart9 :windowSize="windowSize" :img="imgs.part9" />
      </li>
      <li>
        <MobPart10 :windowSize="windowSize" :img="imgs.part10" />
      </li>
    </ul>
    <MobEndPage />
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
    return { imgs: content.timelineMobImgs }
  },
}
</script>

<style lang="scss" scoped>
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
