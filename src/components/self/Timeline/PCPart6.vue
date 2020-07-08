<template>
  <div class="d-flex">
    <div class="part6-text">
      <div class="part6-graph-wrapper">
        <div class="part6-graph">
          <h2 class="part6-title">暢通升學管道：廢聯考、推多元入學</h2>
          <p>
            <span>2001年：</span> 廢除高中聯考，改為國中基本學力測驗，一年兩試。
          </p>
          <p>
            <span>2002年：</span> 廢除大學聯考，改為學測、指考，入學方式更多元。
          </p>
        </div>
      </div>
      <div class="part6-today-wrapper">
        <div class="part6-today">
          <div class="part6-today-title">
            <span>2020年的今天</span>
          </div>
          <ul class="part6-today-list">
            <li>
              <div class="part6-today-list-subtitle">國中基測變調：</div>
              <div>
                基測設立的目的為檢測學生學力狀況，原規劃搭配國中在校成績做為高中招生依據，但因社會輿論反彈未實施，基測成績仍為升學唯一參採，
                <span>學生壓力未減、愈補愈兇。</span>
              </div>
            </li>
            <li>
              <div class="part6-today-list-subtitle">多元入學變多錢入學？</div>
              <div>
                「多元入學方案」讓特殊才能的學生，有機會透過個人申請等方式進到適合的大學科系，但也衍生
                <span>高三學習不完整、申請入學不利弱勢學生</span>等爭議。
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="part6-image-wrapper">
      <div class="part6-image">
        <img :class="{ active }" :src="img" alt />
        <div>圖為末代大學聯考，考場人山人海。圖／報系資料照</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PCpart6',
  props: { active: { type: Boolean, default: false }, img: { type: String } },
}
</script>
<style lang="scss" scoped>
.part6-text {
  display: flex;
  width: 1140px;
  height: 100vh;
  .part6-graph-wrapper {
    position: relative;
    height: 100%;
    width: 500px;
    margin-right: 70px;
    .part6-graph {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      top: 27.22%;
      left: 0;
      width: 500px;
      .part6-title {
        font-size: 40px;
        font-weight: bold;
        line-height: 1.56;
        text-align: left;
        color: #000000;
      }
      p {
        // width: 39.02vw;
        font-size: 20px;
        line-height: 1.7;
        text-align: left;
        color: #000000;
        margin: 15px 0 23px;
        padding-right: 1%;
        span {
          font-weight: bold;
        }
      }
    }
  }
  .part6-today-wrapper {
    position: relative;
    height: 100%;
    width: 500px;
    margin-right: 70px;
    .part6-today {
      position: absolute;
      top: 27.5%;
      // padding: 0 10% 0 10%;
      .part6-today-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span {
          display: inline-block;
          white-space: nowrap;
          color: #ffffff;
          padding: 0 15px;
          background-color: #00ccb1;
          font-size: 40px;
          font-weight: bold;
          line-height: 1.56;
          text-align: center;
        }
      }
      .part6-today-list {
        list-style-type: none;
        font-size: 20px;
        line-height: 1.7;
        text-align: left;
        color: #000000;
        li {
          margin: 12px 0 8px;
          .part6-today-list-subtitle {
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

.part6-image-wrapper {
  width: 777px;
  // height: 68.8vh;
  .part6-image {
    position: absolute;
    top: 89px;
    width: 777px;
    img {
      width: 100%;
      //max-height: 100%;
      transform: translateY(100%);
      opacity: 0;
      transition: all 0.5s ease-out;
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
