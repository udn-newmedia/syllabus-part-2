<template>
  <div class="d-flex">
    <div class="part10-text">
      <div class="part10-graph-wrapper">
        <div class="part10-graph">
          <h2 class="part10-title">歷時10年籌備的108課綱</h2>
          <ul class="part10-nextlist">
            <li>
              斥資
              <span>450</span>億
            </li>
            <li>歷經藍綠執政</li>
            <li>
              籌備時間長達
              <span>10</span>年
            </li>
            <li>史上最大一波教育改革</li>
          </ul>
          <!-- <ul class="part10-nextlist">
            <li>
              <span>2011年：</span>前總統馬英九宣布啟動十二年國民基本教育
            </li>
            <li>
              <span>2014年：</span>國中教育會考上路，國中升學分為「免試入學」和「特色招生」
            </li>
          </ul>-->
        </div>
      </div>
      <div class="part10-today-wrapper">
        <div class="part10-today">
          <div class="part10-today-title">
            <span>如何執行爭議不斷</span>
          </div>
          <ul class="part10-today-list">
            <li>學科時數減少，老師擔心教不完。</li>
            <li>「素養」太抽象，老師不會教、家長霧煞煞。</li>
            <li>各科領綱、教科書審查匆忙。</li>
            <li>學習歷程檔案3隱憂：學校造假、拉大城鄉差距、缺乏鑑別度。</li>
            <li>師資、教室不足，選修課難落實。</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="part10-image-wrapper">
      <div class="part10-image">
        <img class="img-fluid" :class="{ active }" :src="img" alt />
        <div>
          十二年國教、108課綱的各項政策，近年屢遭家長與教育團體抗議。圖／報系資料照
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PCPart10",
  props: { active: { type: Boolean, default: false }, img: { type: String } },
};
</script>
<style lang="scss" scoped>
.part10-text {
  display: flex;
  width: 1140px;
  height: 100vh;
  .part10-graph-wrapper {
    position: relative;
    height: 100%;
    width: 500px;
    margin-right: 70px;
    .part10-graph {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      top: 27.22%;
      left: 0;
      .part10-title {
        font-size: 40px;
        font-weight: bold;
        line-height: 1.56;
        text-align: left;
        color: #000000;
        padding-bottom: 15px;
      }
      .part10-nextlist {
        font-size: 20px;
        line-height: 1.7;
        text-align: left;
        color: #000000;
        span {
          font-weight: bold;
          color: #eb0f43;
        }
      }
    }
  }
  .part10-today-wrapper {
    position: relative;
    height: 100%;
    width: 500px;
    margin-right: 70px;
    .part10-today {
      position: absolute;
      top: 27.5%;
      // padding: 0 10% 0 10%;
      .part10-today-title {
        display: flex;
        // justify-content: flex-start;
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
      .part10-today-list {
        font-size: 20px;
        line-height: 1.7;
        text-align: left;
        color: #000000;
        margin-top: 14px;
        li {
          position: relative;
          padding-left: 22px;
          font-size: 20px;
          &::before {
            content: "";
            position: absolute;
            width: 12px;
            height: 12px;
            top: 9px;
            left: 0;
            background-color: #00ccb1;
            border-radius: 50%;
          }
          span {
            font-weight: bold;
          }
        }
      }
    }
  }
}

.part10-image-wrapper {
  width: 777px;
  .part10-image {
    position: absolute;
    top: 89px;
    img {
      width: 777px;
      //max-width: 100%;
      max-height: 100%;
      transform: translateY(100%);
      opacity: 0;
      transition: all 1s ease-out;
      &.active {
        transform: translateY(0%);
        opacity: 1;
      }
    }
    div {
      width: 777px;
      font-size: 15px;
      line-height: 1.4;
      text-align: left;
      color: #929292;
    }
  }
}
</style>
