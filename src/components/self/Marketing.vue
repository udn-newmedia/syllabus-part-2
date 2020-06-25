<template>
  <div class="marketing" :style="{'backgroundColor':bg}">
    <div class="marketing-title">課綱強調生活情境</div>
    <div
      class="marketing-text"
    >你對台灣教育、上路一年的108課綱有話想說嗎？歡迎寫下看法，《聯合報》今年將持續追蹤報導此波教改，你的心聲與建議，都是我們的重要報導線索。</div>
    <div class="marketing-img-wrapper">
      <div class="marketing-img-blueline">
        <span />
      </div>
      <div v-for="(data,i) in dataArray" class="marketing-img" :key="data.id">
        <div class="marketing-img-text">{{data.text}}</div>
        <div class="marketing-img-container">
          <div class="marketing-img-date">{{data.date}}</div>
          <div class="marketing-img-signup" @click="signup(i+1)">
            <span>報名</span>
          </div>
          <img class="marketing-img-area" src alt style="background-color:rgba(0,0,0,0.5)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sendGaMethods } from '@/mixins/masterBuilder.js'
import content from '../../data/content'

export default {
  name: 'Marketing',
  props: {
    bg: {
      type: String,
      default: '#fff',
    },
  },
  mixins: [sendGaMethods],
  data() {
    return {
      dataArray: content.marketing,
    }
  },
  methods: {
    signup(index) {
      // do something
      const url = window.location.href
      let aim = ''
      if (url.indexOf('/story') !== -1) {
        aim = 'story'
      } else if (url.indexOf('/poll') !== -1) {
        aim = 'poll'
      } else {
        aim = 'timeline'
      }

      this.sendGA({
        category: 'activity',
        action: 'click',
        label: `${aim}報名${index}`,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.marketing {
  // width: 100vw;
  height: 100vh;
  .marketing-title {
    font-family: SourceHanSerifTC-Bold;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.6;
    text-align: left;
    color: #000000;
    padding-top: 100px;
    margin-left: 21.9%;
  }
  .marketing-text {
    font-family: SourceHanSansTW-Regular;
    font-size: 16px;
    line-height: 1.5;
    text-align: left;
    color: #7b7a7a;
    margin-left: 21.9%;
    width: 33.67%;
  }
  .marketing-img-wrapper {
    margin-top: 7.36vh;
    display: flex;
    flex-wrap: wrap;
    .marketing-img-blueline {
      flex: 0 0 31.25vw;
      max-width: 31.25vw;
      height: 41.52vh;
      position: relative;
      span {
        position: absolute;
        width: 12.89vw;
        height: 1px;
        background-color: #00ccb1;
        right: -10%;
        top: 50%;
        z-index: 2;
      }
    }
    .marketing-img {
      flex: 0 0 27.42vw;
      max-width: 27.42vw;
      height: 41.52vh;
      margin: 0 1.4vw;
      .marketing-img-text {
        font-family: SourceHanSansTW-Bold;
        font-size: 28px;
        font-weight: bold;
        line-height: 1.29;
        text-align: left;
        color: #000000;
        margin-bottom: 8px;
        margin-left: 12px;
      }
      .marketing-img-container {
        z-index: 1;
        position: relative;
        height: 34.58vh;
        border-radius: 6px;
        background-color: #bebebe;
        .marketing-img-date {
          position: absolute;
          top: 26px;
          left: 16px;
          font-family: TitlingGothicFBComp-Standard;
          font-size: 44px;
          line-height: 0.55;
          text-align: left;
          color: #000000;
        }
        .marketing-img-signup {
          position: absolute;
          bottom: 24px;
          right: 24px;
          width: 101px;
          height: 50px;
          background-color: #000;
          font-family: SourceHanSansTW;
          font-size: 16px;
          line-height: 1.25;
          color: #f7f5f5;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .marketing {
    height: 120vh;
    .marketing-title {
      margin-left: 12.5%;
    }
    .marketing-text {
      margin-left: 12.5%;
      width: 40%;
    }
    .marketing-img-wrapper {
      justify-content: flex-end;
      margin-right: 19.27vw;
      .marketing-img {
        flex: 0 0 45.7vw;
        max-width: 45.7vw;
      }
    }
  }
}
@media screen and (max-width: 760px) {
  .marketing {
    .marketing-title {
      text-align: center;
      margin-left: 0;
    }
    .marketing-text {
      margin-left: 25%;
      width: 50%;
    }
    .marketing-img-wrapper {
      margin-right: 0;
      justify-content: center;
      .marketing-img-blueline {
        display: none;
      }
      .marketing-img {
        flex: 0 0 84.78vw;
        max-width: 84.78vw;
        .marketing-img-text {
          text-align: center;
          margin-bottom: 8px;
          margin-left: 0;
        }
      }
    }
  }
}
@media screen and (max-width: 520px) {
  .marketing {
    .marketing-title {
      font-size: 35px;
    }
    .marketing-text {
      margin-left: 10%;
      margin-right: 10%;
      width: 80%;
    }
  }
}
</style>
