<template>
  <div class="mob-part6">
    <div class="mob-part6-text">
      <h1 class="mob-part6-title">課程重大變革：九年一貫</h1>
      <ul class="mob-part6-list">
        <li>2001年實施，是當時台灣教育史上幅度最大的課程改革。</li>
        <li>影響全國小學、國中學生。</li>
        <li>主要變革在於「能力」取代「學科知識」，分科學習改成7大學習領域。</li>
        <li>推動彈性時間、鼓勵各校自編特色課程。</li>
      </ul>

      <h2 class="mob-part6ーsubtitle">2020年的今天</h2>
      <ul class="mob-part6-today-list">
        <li>
          <div class="mob-part6-text-green mob-part6-text-bold">學生書包變重：</div>
          <span>
            九年一貫原本希望減輕學生書包重量，但
            <span class="mob-part6-text-red">英語課提早至小三、一綱多本</span>等因素，「行李箱書包」變成校園裡最沉重的風景。
          </span>
        </li>
        <li>
          <div class="mob-part6-text-green mob-part6-text-bold">熱鬧有餘、內涵不足：</div>國小教育更彈性與活潑，但國中嚴重扭曲。九年一貫希望教師跨科合作，協同、統整教學，但在升學壓力、教師反彈、教育部退讓下失敗；彈性時間也淪為學科加課，被專家批評「熱鬧有餘、內涵不足」。
        </li>
        <li>
          <div class="mob-part6-text-green mob-part6-text-bold">檢討聲浪不斷：</div>
          <div>1. 政策上路太匆忙、缺乏溝通。</div>
          <div>2. 缺乏研究基礎支撐。</div>
          <div>3. 師資能力沒有隨著教改轉型。</div>
          <div>4. 國中升學壓力未減，課程改革難落實。</div>
        </li>
      </ul>
    </div>
    <div class="mob-part6-img">
      <img
        class="img-fluid"
        :class="{ active }"
        :src="windowSize.width >= 768 ? img.pad : img.mob"
        alt
      />
      <p class="mob-part6-img-text">九年一貫上路後，學生書包愈來愈沈重，各界批評聲浪不斷。圖／報系資料照</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobPart6',
  props: {
    windowSize: { type: Object },
    img: { type: Object },
    active: { type: Boolean },
  },
}
</script>

<style lang="scss" scoped>
.mob-part6 {
  text-align: left;
  .mob-part6-text {
    padding-top: 72px;
    padding-left: 14.3%;
    padding-right: 7.8%;
    .mob-part6-title {
      margin-bottom: 15px;

      font-size: 40px;
      font-weight: bold;
      line-height: 1.56;
    }
    .mob-part6-list {
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
    .mob-part6ーsubtitle {
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
    .mob-part6-today-list {
      font-size: 20px;
      line-height: 1.7;
      margin-bottom: 10px;
      li {
        margin-bottom: 20px;
        .mob-part6-text-bold {
          font-weight: bold;
        }
        .mob-part6-text-red {
          color: #eb0f43;
        }
        .mob-part6-text-green {
          color: #049d88;
        }
      }
    }
  }
  .mob-part6-img {
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
    .mob-part6-img-text {
      font-size: 15px;
      line-height: 1.4;
      color: #929292;
      margin-top: 5px;
      margin-bottom: 25px;
    }
  }
  @media screen and (max-width: 767.99px) {
    .mob-part6-text {
      padding-top: 60px;
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part6-title {
        margin-bottom: 9px;
        font-size: 30px;
      }
      .mob-part6-list {
        font-size: 18px;
        li {
          padding-left: 22px;
          &::before {
            top: 8px;
          }
        }
      }
      .mob-part6ーsubtitle {
        font-size: 30px;
        margin-bottom: 10px;
        padding-left: 0;
        padding-right: 0;
      }
      .mob-part6-today-list {
        font-size: 18px;
        margin-bottom: 20px;
        li {
          margin-bottom: 20px;
        }
      }
    }
    .mob-part6-img {
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part6-img-text {
        font-size: 15px;
        margin-top: 6.5px;
        margin-bottom: 40px;
      }
    }
  }
  @media screen and (max-width: 374.99px) {
    .mob-part6-text {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part6-title {
        margin-bottom: 10px;
      }
      .mob-part6-list {
        li {
          padding-left: 24px;
          &::before {
            top: 8px;
          }
        }
      }
    }
    .mob-part6-img {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part6-img-text {
        margin-top: 5.4px;
        margin-bottom: 26px;
      }
    }
  }
}
</style>
