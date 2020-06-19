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
      <li style="height:100px"></li>
      <li style="height:100px"></li>
      <li style="height:100px"></li>
      <li style="height:100px"></li>
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

export default {
  name: 'TimelineMob',
  props: { windowSize: { type: Object } },
  components: { MobPart0, MobPart1, MobPart2, MobPart3 },
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
