<template>
  <div class="mob-part5">
    <div class="mob-part5-text">
      <h1 class="mob-part5-title">暢通升學管道：廢聯考、推多元入學</h1>
      <ul class="mob-part5-list">
        <li>2001年：廢除高中聯考，改為國中基本學力測驗，一年兩試。</li>
        <li>2002年：廢除大學聯考，改為學測、指考，入學方式更多元。</li>
      </ul>

      <h2 class="mob-part5ーsubtitle">2020年的今天</h2>
      <ul class="mob-part5-today-list">
        <li>
          <div class="mob-part5-text-green mob-part5-text-bold">國中基測變調：</div>
          <span>
            基測設立的目的為檢測學生學力狀況，原規劃搭配國中在校成績做為高中招生依據，但因社會輿論反彈未實施，基測成績仍為升學唯一參採，
            <span
              class="mob-part5-text-red"
            >學生壓力未減、愈補愈兇。</span>
          </span>
        </li>
        <li>
          <div class="mob-part5-text-green mob-part5-text-bold">多元入學變多錢入學？</div>「多元入學方案」讓特殊才能的學生，有機會透過個人申請等方式進到適合的大學科系，但也衍生
          <span
            class="mob-part5-text-red"
          >高三學習不完整、申請入學不利弱勢學生</span>等爭議。
        </li>
      </ul>
    </div>
    <div class="mob-part5-img">
      <img
        class="img-fluid"
        :class="{ active }"
        :src="windowSize.width >= 768 ? img.pad : img.mob"
        alt
      />
      <p class="mob-part5-img-text">圖為末代大學聯考，考場人山人海。圖／報系資料照</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobPart5',
  props: {
    windowSize: { type: Object },
    img: { type: Object },
    active: { type: Boolean },
  },
}
</script>

<style lang="scss" scoped>
.mob-part5 {
  text-align: left;
  .mob-part5-text {
    padding-top: 72px;
    padding-left: 14.3%;
    padding-right: 7.8%;
    .mob-part5-title {
      margin-bottom: 15px;

      font-size: 40px;
      font-weight: bold;
      line-height: 1.56;
    }
    .mob-part5-list {
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
    .mob-part5ーsubtitle {
      display: inline-block;
      font-size: 40px;
      font-weight: bold;
      line-height: 1.56;
      color: #ffffff;
      background-color: #00ccb1;
      margin-bottom: 15px;
      padding-left: 15px;
      padding-right: 15px;
    }
    .mob-part5-today-list {
      font-size: 20px;
      line-height: 1.7;
      margin-bottom: 10px;
      li {
        margin-bottom: 20px;
        .mob-part5-text-bold {
          font-weight: bold;
        }
        .mob-part5-text-red {
          color: #eb0f43;
        }
        .mob-part5-text-green {
          color: #049d88;
        }
      }
    }
  }
  .mob-part5-img {
    padding-left: 14.3%;
    padding-right: 7.8%;
    img {
      max-width: 100%;
      transition: all 1s ease-out;
      transform: translateX(-100%);
      opacity: 0;
      &.active {
        transform: translateX(0%);
        opacity: 1;
      }
    }
    .mob-part5-img-text {
      font-size: 15px;
      line-height: 1.4;
      color: #929292;
      margin-top: 5px;
      margin-bottom: 25px;
    }
  }
  @media screen and (max-width: 767.99px) {
    .mob-part5-text {
      padding-top: 60px;
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part5-title {
        margin-bottom: 9px;
        font-size: 30px;
      }
      .mob-part5-list {
        font-size: 18px;
        li {
          padding-left: 22px;
          &::before {
            top: 8px;
          }
        }
      }
      .mob-part5ーsubtitle {
        font-size: 30px;
        margin-bottom: 10px;
        padding-left: 0;
        padding-right: 0;
      }
      .mob-part5-today-list {
        font-size: 18px;
        margin-bottom: 20px;
        li {
          margin-bottom: 20px;
        }
      }
    }
    .mob-part5-img {
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part5-img-text {
        font-size: 15px;
        margin-top: 6.5px;
        margin-bottom: 40px;
      }
    }
  }
  @media screen and (max-width: 374.99px) {
    .mob-part5-text {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part5-title {
        margin-bottom: 10px;
      }
      .mob-part5-list {
        li {
          padding-left: 24px;
          &::before {
            top: 8px;
          }
        }
      }
    }
    .mob-part5-img {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part5-img-text {
        margin-top: 5.4px;
        margin-bottom: 26px;
      }
    }
  }
}
</style>
