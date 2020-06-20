<template>
  <div class="mob-part9" ref="mobPart9">
    <div class="mob-part9-text">
      <h1 class="mob-part9-title">歷時10年籌備的108課綱</h1>
      <ul class="mob-part9-today-list">
        <li>
          斥資
          <span class="mob-part9-text-red mob-part9-text-bold">450</span>億
        </li>
        <li>歷經藍綠執政</li>
        <li>
          籌備時間長達
          <span class="mob-part9-text-red mob-part9-text-bold">10</span>年
        </li>
        <li>史上最大一波教育改革</li>
      </ul>

      <h2 class="mob-part9ーsubtitle">如何執行爭議不斷</h2>
      <ul class="mob-part9-list">
        <li>學科時數減少，老師擔心教不完。</li>
        <li>「素養」太抽象，老師不會教、家長霧煞煞。</li>
        <li>各科領綱、教科書審查匆忙。</li>
        <li>學習歷程檔案3隱憂：學校造假、拉大城鄉差距、缺乏鑑別度。</li>
        <li>師資、教室不足，選修課難落實。</li>
      </ul>
    </div>
    <div class="mob-part9-img">
      <img
        class="img-fluid"
        :class="{active}"
        :src="windowSize.width >= 768 ? img.pad : img.mob"
        alt
      />
      <p class="mob-part9-img-text">十二年國教、108課綱的各項政策，近年屢遭家長與教育團體抗議。圖／報系資料照</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobPart9',
  props: { windowSize: { type: Object }, img: { type: Object } },
  data() {
    return { active: false }
  },
  methods: {
    updateProgress() {
      const containerTop = this.$refs.mobPart9.offsetTop
      const { innerHeight, pageYOffset } = window
      if (pageYOffset > containerTop - 0.5 * innerHeight) {
        this.active = true
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.updateProgress)
  },
  mounted() {
    this.updateProgress()
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateProgress)
  },
}
</script>

<style lang="scss" scoped>
.mob-part9 {
  text-align: left;
  .mob-part9-text {
    padding-top: 72px;
    padding-left: 14.3%;
    padding-right: 7.8%;
    font-family: source-han-sans-traditional, sans-serif;
    .mob-part9-title {
      margin-bottom: 15px;

      font-size: 40px;
      font-weight: bold;
      line-height: 1.56;
    }
    .mob-part9-list {
      font-size: 20px;
      line-height: 1.7;
      margin-bottom: 30px;
      li {
        position: relative;
        padding-left: 22px;
        &::before {
          position: absolute;
          top: 9px;
          left: 0;
          content: '';
          background-color: #00ccb1;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        & > span {
          font-weight: bold;
        }
      }
    }
    .mob-part9ーsubtitle {
      display: inline-block;
      font-family: source-han-sans-traditional, sans-serif;
      font-size: 40px;
      font-weight: bold;
      line-height: 1.56;
      color: #ffffff;
      background-color: #00ccb1;
      margin-bottom: 15px;
      padding-left: 15px;
      padding-right: 15px;
    }
    .mob-part9-today-list {
      font-size: 20px;
      line-height: 1.7;
      margin-bottom: 72px;
      li {
        .mob-part9-text-bold {
          font-weight: bold;
        }
        .mob-part9-text-red {
          color: #eb0f43;
        }
        .mob-part9-text-green {
          color: #049d88;
        }
      }
    }
  }
  .mob-part9-img {
    padding-left: 14.3%;
    padding-right: 7.8%;
    img {
      max-width: 100%;
      transition: all 2s ease-out;
      transform: translateX(-100%);
      opacity: 0;
      &.active {
        transform: translateX(0%);
        opacity: 1;
      }
    }
    .mob-part9-img-text {
      font-family: source-han-sans-traditional, sans-serif;
      font-size: 15px;
      line-height: 1.4;
      color: #929292;
      margin-top: 5px;
      margin-bottom: 25px;
    }
  }
  @media screen and (max-width: 767.99px) {
    .mob-part9-text {
      padding-top: 60px;
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part9-title {
        margin-bottom: 9px;
        font-size: 30px;
      }
      .mob-part9-list {
        font-size: 18px;
        li {
          padding-left: 22px;
          &::before {
            top: 8px;
          }
        }
      }
      .mob-part9ーsubtitle {
        font-size: 30px;
        margin-bottom: 10px;
        padding-left: 0;
        padding-right: 0;
      }
      .mob-part9-today-list {
        font-size: 18px;
        margin-bottom: 30px;
      }
    }
    .mob-part9-img {
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part9-img-text {
        font-size: 15px;
        margin-top: 6.5px;
        margin-bottom: 40px;
      }
    }
  }
  @media screen and (max-width: 374.99px) {
    .mob-part9-text {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part9-title {
        margin-bottom: 10px;
      }
      .mob-part9-list {
        li {
          padding-left: 24px;
          &::before {
            top: 8px;
          }
        }
      }
    }
    .mob-part9-img {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part9-img-text {
        margin-top: 5.4px;
        margin-bottom: 26px;
      }
    }
  }
}
</style>