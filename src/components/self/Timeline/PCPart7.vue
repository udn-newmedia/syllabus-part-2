<template>
  <div class="d-flex">
    <div class="part7-text">
      <div class="part7-91-wrapper">
        <div class="part7-91">
          <h2 class="part7-title">課程重大變革：九年一貫</h2>
          <ul class="part7-91list">
            <li>2001年實施，是當時台灣教育史上幅度最大的課程改革。</li>
            <li>影響全國小學、國中學生。</li>
            <li>
              主要變革在於「能力」取代「學科知識」，分科學習改成7大學習領域。
            </li>
            <li>推動彈性時間、鼓勵各校自編特色課程。</li>
          </ul>
        </div>
      </div>
      <div class="part7-today-wrapper">
        <div class="part7-today">
          <div class="part7-today-title">
            <span>2020年的今天</span>
          </div>
          <ul class="part7-today-list">
            <li>
              <div class="part7-today-list-subtitle">學生書包變重：</div>
              <div>
                九年一貫原本希望減輕學生書包重量，但
                <span>英語課提早至小三、一綱多本</span
                >等因素，「行李箱書包」變成校園裡最沉重的風景。
              </div>
            </li>
            <li style="padding-left:9.38vw">
              <div class="part7-today-list-subtitle">檢討聲浪不斷：</div>
              <div>1. 政策上路太匆忙、缺乏溝通。</div>
              <div>2. 缺乏研究基礎支撐。</div>
              <div>3. 師資能力沒有隨著教改轉型。</div>
              <div>4. 國中升學壓力未減，課程改革難落實。</div>
            </li>
            <li>
              <div class="part7-today-list-subtitle">熱鬧有餘、內涵不足：</div>
              <div>
                國小教育更彈性與活潑，但國中嚴重扭曲。九年一貫希望教師跨科合作，協同、統整教學，但在升學壓力、教師反彈、教育部退讓下失敗；彈性時間也淪為學科加課，被專家批評「熱鬧有餘、內涵不足」。
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="part7-image-wrapper">
      <div class="part7-image">
        <img class="img-fluid" :class="{ active }" :src="img" alt />
        <div>
          廣設大學造成學歷貶值，高學歷變成高失業，圖為補習班的廣告口號。圖／報系資料照
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PCPart7",
  props: { active: { type: Boolean, default: false }, img: { type: String } },
};
</script>
<style lang="scss" scoped>
.part7-text {
  display: flex;
  width: 144.3vw;
  height: 100vh;
  .part7-91-wrapper {
    position: relative;
    height: 100%;
    width: 32.86%;
    .part7-91 {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      top: 27.22%;
      left: 0;
      .part7-title {
        font-size: 40px;
        font-weight: bold;
        line-height: 1.56;
        text-align: left;
        color: #000000;
      }
      .part7-91list {
        line-height: 1.7;
        text-align: left;
        color: #000000;
        li {
          position: relative;
          padding-left: 22px;
          font-size: 20px;
          max-width: 39vw;
          &::before {
            content: "";
            position: absolute;
            width: 12px;
            height: 12px;
            top: 9px;
            left: 0;
            background-color: #000000;
            border-radius: 50%;
          }
        }
      }
    }
  }
  .part7-today-wrapper {
    position: relative;
    height: 100%;
    width: 67.14%;
    .part7-today {
      position: absolute;
      top: 27.5%;
      // padding: 0 10% 0 10%;
      .part7-today-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span {
          display: inline-block;
          white-space: nowrap;
          color: #ffffff;
          padding: 0 5%;
          background-color: #00ccb1;
          font-size: 40px;
          font-weight: bold;
          line-height: 1.56;
          text-align: center;
        }
      }
      .part7-today-list {
        list-style-type: none;
        font-size: 20px;
        line-height: 1.7;
        text-align: left;
        color: #000000;
        display: flex;
        flex-wrap: wrap;
        // flex-direction: column;
        li {
          flex: 0 0 50%;
          max-height: 50%;
          // max-width: 100%;
          margin: 12px 0 8px;
          .part7-today-list-subtitle {
            color: #049d88;
          }
          span {
            color: #eb0f43;
          }
        }
      }
    }
  }
}

.part7-image-wrapper {
  width: 32.5vw;
  height: 100vh;
  margin-left: 70px;
  position: relative;
  .part7-image {
    height: 68.8vh;
    position: absolute;
    top: 12.2vh;
    img {
      width: 100%;
      max-height: 100%;
      transform: translateY(100%);
      opacity: 0;
      transition: all 2s ease-out;
      &.active {
        transform: translateY(0%);
        opacity: 1;
      }
    }
    div {
      font-size: 15px;
      line-height: 1.4;
      text-align: left;
      color: #929292;
      // padding: 0 10%;
      @media screen and (max-width: 1280px) {
        padding: 0;
      }
    }
  }
}
</style>
