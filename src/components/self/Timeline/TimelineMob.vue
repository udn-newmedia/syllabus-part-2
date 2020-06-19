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
      <li>
        <MobPart7 />
      </li>
      <li style="height:100px"></li>
      <li style="height:100px"></li>
      <li style="height:100px"></li>
      <li style="height:100px"></li>
    </ul>
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
