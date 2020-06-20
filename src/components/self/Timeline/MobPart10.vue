<template>
  <div class="mob-part10" ref="mobPart10">
    <div class="mob-part10-text">
      <h1 class="mob-part10-title">2020年：108課綱上路1年後</h1>
      <div class="mob-part10-list-title">《聯合報》針對1200位民眾、929所學校進行民調後發現：</div>
      <ul class="mob-part10-list">
        <li>
          <span class="mob-part10-list-text-bold mob-part10-list-text-red">6成</span>以上民眾沒聽過108課綱；聽過的人，
          <span class="mob-part10-list-text-bold mob-part10-list-text-red">8成</span>不清楚課綱內容。
        </li>
        <li>
          <span class="mob-part10-list-text-bold mob-part10-list-text-red">3成</span>家長不知道孩子是不是適用108課綱。
        </li>
        <li>
          <span class="mob-part10-list-text-bold mob-part10-list-text-red">7成</span>國高中實施108課綱遇到困難。
        </li>
        <li>
          <span class="mob-part10-list-text-bold">課程進度、考招制度、師資專業、素養教學讓學校卡卡。</span>
        </li>
        <li>升學仍讓家長感到焦慮。</li>
      </ul>
    </div>
    <div class="mob-part10-img">
      <img
        class="img-fluid"
        :class="{active}"
        :src="windowSize.width >= 768 ? img.pad : img.mob"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobPart10',
  props: { windowSize: { type: Object }, img: { type: Object } },
  data() {
    return { active: false }
  },
  methods: {
    updateProgress() {
      const containerTop = this.$refs.mobPart10.offsetTop
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
.mob-part10 {
  text-align: left;
  .mob-part10-text {
    padding-top: 72px;
    padding-left: 14.3%;
    padding-right: 7.8%;
    font-family: source-han-sans-traditional, sans-serif;
    .mob-part10-title {
      margin-bottom: 15px;
      font-size: 40px;
      font-weight: bold;
      line-height: 1.56;
    }
    .mob-part10-list-title {
      margin-bottom: 15px;
      font-size: 20px;
      font-weight: bold;
      line-height: 1.7;
    }
    .mob-part10-list {
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
        .mob-part10-list-text-bold {
          font-weight: bold;
        }
        .mob-part10-list-text-red {
          color: #eb0f43;
        }
      }
    }
  }
  .mob-part10-img {
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
    .mob-part10-img-text {
      font-family: source-han-sans-traditional, sans-serif;
      font-size: 15px;
      line-height: 1.4;
      color: #929292;
      margin-top: 5px;
      margin-bottom: 25px;
    }
  }
  @media screen and (max-width: 767.99px) {
    .mob-part10-text {
      padding-top: 60px;
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part10-title {
        margin-bottom: 9px;
        font-size: 30px;
      }
      .mob-part10-list {
        font-size: 18px;
        li {
          padding-left: 22px;
          &::before {
            top: 8px;
          }
        }
      }
    }
    .mob-part10-img {
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part10-img-text {
        font-size: 15px;
        margin-top: 6.5px;
        margin-bottom: 40px;
      }
    }
  }
  @media screen and (max-width: 374.99px) {
    .mob-part10-text {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part10-title {
        margin-bottom: 10px;
      }
      .mob-part10-list {
        li {
          padding-left: 24px;
          &::before {
            top: 8px;
          }
        }
      }
    }
    .mob-part10-img {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part10-img-text {
        margin-top: 5.4px;
        margin-bottom: 26px;
      }
    }
  }
}
</style>