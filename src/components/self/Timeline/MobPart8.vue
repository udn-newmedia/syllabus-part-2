<template>
  <div class="mob-part8" ref="mobPart8">
    <div class="mob-part8-text">
      <h1 class="mob-part8-title">下一波教改：十二年國教、免試入學</h1>
      <ul class="mob-part8-list">
        <li>2011年：前總統馬英九宣布啟動十二年國民基本教育</li>
        <li>2014年：國中教育會考上路，國中升學分為「免試入學」和「特色招生」</li>
      </ul>

      <h2 class="mob-part8ーsubtitle">2020年的今天</h2>
      <ul class="mob-part8-today-list">
        <li>
          <div class="mob-part8-text-green mob-part8-text-bold">「免試」不是真免試：</div>報名人數若超過學校招生名額，將進行「超額比序」，項目包括會考成績、志願序、多元學習表現。
        </li>
        <li>
          <div class="mob-part8-text-green mob-part8-text-bold">明星高中搶破頭：</div>有些縣市已幾乎全面免試；但部分縣市明星高中光環仍在，升學壓力沒減輕。
        </li>
        <li>
          <div class="mob-part8-text-green mob-part8-text-bold">私校風氣更盛：</div>升學方式複雜，家長圖直升，就讀私立國中的學生大增。教育部統計，2014年就讀私立國中的學生比例僅
          <span class="mob-part8-text-red">11.74％</span>，2019年增加到
          <span class="mob-part8-text-red">13.9％</span>。
        </li>
      </ul>
    </div>
    <div class="mob-part8-img">
      <img
        class="img-fluid"
        :class="{active}"
        :src="windowSize.width >= 768 ? img.pad : img.mob"
        alt
      />
      <p class="mob-part8-img-text">圖為首屆國中會考後，十二年國教家長聯盟在教育部外抗議，要求教育部對會考填志願制度提出補救措施。圖／報系資料照</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobPart8',
  props: { windowSize: { type: Object }, img: { type: Object } },
  data() {
    return { active: false }
  },
  methods: {
    updateProgress() {
      const containerTop = this.$refs.mobPart8.offsetTop
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
.mob-part8 {
  text-align: left;
  .mob-part8-text {
    padding-top: 72px;
    padding-left: 14.3%;
    padding-right: 7.8%;
    font-family: source-han-sans-traditional, sans-serif;
    .mob-part8-title {
      margin-bottom: 15px;

      font-size: 40px;
      font-weight: bold;
      line-height: 1.56;
    }
    .mob-part8-list {
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
    .mob-part8ーsubtitle {
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
    .mob-part8-today-list {
      font-size: 20px;
      line-height: 1.7;
      margin-bottom: 10px;
      li {
        margin-bottom: 20px;
        .mob-part8-text-bold {
          font-weight: bold;
        }
        .mob-part8-text-red {
          color: #eb0f43;
        }
        .mob-part8-text-green {
          color: #049d88;
        }
      }
    }
  }
  .mob-part8-img {
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
    .mob-part8-img-text {
      font-family: source-han-sans-traditional, sans-serif;
      font-size: 15px;
      line-height: 1.4;
      color: #929292;
      margin-top: 5px;
      margin-bottom: 25px;
    }
  }
  @media screen and (max-width: 767.99px) {
    .mob-part8-text {
      padding-top: 60px;
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part8-title {
        margin-bottom: 9px;
        font-size: 30px;
      }
      .mob-part8-list {
        font-size: 18px;
        li {
          padding-left: 22px;
          &::before {
            top: 8px;
          }
        }
      }
      .mob-part8ーsubtitle {
        font-size: 30px;
        margin-bottom: 10px;
        padding-left: 0;
        padding-right: 0;
      }
      .mob-part8-today-list {
        font-size: 18px;
        margin-bottom: 20px;
        li {
          margin-bottom: 20px;
        }
      }
    }
    .mob-part8-img {
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part8-img-text {
        font-size: 15px;
        margin-top: 6.5px;
        margin-bottom: 40px;
      }
    }
  }
  @media screen and (max-width: 374.99px) {
    .mob-part8-text {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part8-title {
        margin-bottom: 10px;
      }
      .mob-part8-list {
        li {
          padding-left: 24px;
          &::before {
            top: 8px;
          }
        }
      }
    }
    .mob-part8-img {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part8-img-text {
        margin-top: 5.4px;
        margin-bottom: 26px;
      }
    }
  }
}
</style>