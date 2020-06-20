<template>
  <div class="mob-part2" ref="mobPart2">
    <div class="mob-part2-text">
      <h1 class="mob-part2-title">教改序幕：410大遊行</h1>
      <ul class="mob-part2-list">
        <li>
          <span>時間：</span>1994年4月10日
        </li>
        <li>
          <span>參與者：</span>200多個民間團體、3萬民眾
        </li>
        <li>
          <span>訴求：</span>落實小班小校、廣設高中大學、推動教育現代化、制定教育基本法
        </li>
      </ul>
      <p class="mob-part2-content">為下一代而走。</p>
      <p class="mob-part2-content">我們要的不多，只希望孩子能有一個好的教育環境，過個快樂童年。</p>
    </div>
    <div class="mob-part2-img">
      <img
        class="img-fluid"
        :class="{active}"
        :src="windowSize.width >= 768 ? img.pad : img.mob"
        alt
      />
      <p class="mob-part2-img-text">民間團體發動「410教育改造運動」，匯集了上萬民眾參與，傳達民間的教育改革理念。圖為1994年遊行情形。圖／報系資料照</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobPart2',
  props: { windowSize: { type: Object }, img: { type: Object } },
  data() {
    return { active: false }
  },
  methods: {
    updateProgress() {
      const containerTop = this.$refs.mobPart2.offsetTop
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
.mob-part2 {
  text-align: left;
  .mob-part2-text {
    padding-top: 72px;
    padding-left: 14.3%;
    padding-right: 7.8%;
    font-family: source-han-sans-traditional, sans-serif;
    .mob-part2-title {
      margin-bottom: 15px;

      font-size: 40px;
      font-weight: bold;
      line-height: 1.56;
    }
    .mob-part2-list {
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
          background-color: #000;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        & > span {
          font-weight: bold;
        }
      }
    }
    .mob-part2-content {
      margin-bottom: 30px;
      font-family: source-han-serif-tc, serif;
      font-size: 30px;
      font-weight: 600;
      line-height: 1.7;
      color: #777777;
    }
  }
  .mob-part2-img {
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
    .mob-part2-img-text {
      font-family: source-han-sans-traditional, sans-serif;
      font-size: 15px;
      line-height: 1.4;
      color: #929292;
      margin-top: 5px;
      margin-bottom: 25px;
    }
  }
  @media screen and (max-width: 767.99px) {
    .mob-part2-text {
      padding-top: 60px;
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part2-title {
        margin-bottom: 9px;
        font-size: 30px;
      }
      .mob-part2-list {
        font-size: 18px;
        li {
          padding-left: 22px;
          &::before {
            top: 8px;
          }
        }
      }
      .mob-part2-content {
        margin-bottom: 30px;
        font-size: 30px;
      }
    }
    .mob-part2-img {
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part2-img-text {
        font-size: 15px;
        margin-top: 6.5px;
        margin-bottom: 40px;
      }
    }
  }
  @media screen and (max-width: 374.99px) {
    .mob-part2-text {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part2-title {
        margin-bottom: 10px;
      }
      .mob-part2-list {
        li {
          padding-left: 24px;
          &::before {
            top: 8px;
          }
        }
      }
    }
    .mob-part2-img {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part2-img-text {
        margin-top: 5.4px;
        margin-bottom: 26px;
      }
    }
  }
}
</style>