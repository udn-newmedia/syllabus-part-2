<template>
  <div class="mob-part4">
    <div class="mob-part4-text">
      <h1 class="mob-part4-title">鬆綁：廣設高中大學</h1>
      <p class="mob-part4-chart-text">在教改訴求與政策引導下，高中、大學數量激增，1994年到2019年間，大學錄取率從44%成長到100%。</p>

      <div class="mob-part4-chart">
        <img :class="{ active }" :src="windowSize.width >= 768 ? chart.pad : chart.mob" alt />
      </div>
      <h2 class="mob-part4ーsubtitle">2020年的今天</h2>
      <ul class="mob-part4-today-list">
        <li>
          <div class="mob-part4-text-green mob-part4-text-bold">學歷貶值：</div>
          <span class="mob-part4-text-bold">
            教育資源增加，人人都有機會上高中和大學，但造成
            <span class="mob-part4-text-red">學歷貶值</span>，高學歷高失業。
          </span>
        </li>
        <li>
          <div class="mob-part4-text-green mob-part4-text-bold">「人生勝利組」定型：</div>社會形塑出「
          <span class="mob-part4-text-red">上高中大學＝成功</span>」氣氛，追求明星高中、名牌大學，技職體系價值感低落。
        </li>
      </ul>
    </div>
    <div class="mob-part4-img">
      <img
        class="img-fluid"
        :class="{ active }"
        :src="windowSize.width >= 768 ? img.pad : img.mob"
        alt
      />
      <p class="mob-part4-img-text">廣設大學造成學歷貶值，高學歷變成高失業，圖為補習班的廣告口號。圖／報系資料照</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobPart4',
  props: {
    windowSize: { type: Object },
    img: { type: Object },
    chart: { type: Object },
    active: { type: Boolean },
  },
}
</script>

<style lang="scss" scoped>
.mob-part4 {
  text-align: left;
  .mob-part4-text {
    padding-top: 72px;
    padding-left: 14.3%;
    padding-right: 7.8%;
    .mob-part4-title {
      margin-bottom: 15px;
      font-size: 40px;
      font-weight: bold;
      line-height: 1.56;
    }
    .mob-part4-chart-text {
      font-size: 20px;
      line-height: 1.7;
      margin-bottom: 60px;
    }
    .mob-part4-chart {
      margin-bottom: 72px;
      display: flex;
      justify-content: center;
      img {
        max-width: 100%;
        // transition: all 1s ease-out;
        // transform: translateX(-100%);
        // opacity: 0;
        // &.active {
        //   transform: translateX(0%);
        //   opacity: 1;
        // }
      }
    }
    .mob-part4ーsubtitle {
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
    .mob-part4-today-list {
      font-size: 20px;
      line-height: 1.7;
      margin-bottom: 10px;
      li {
        margin-bottom: 20px;
        .mob-part4-text-bold {
          font-weight: bold;
        }
        .mob-part4-text-red {
          color: #eb0f43;
        }
        .mob-part4-text-green {
          color: #049d88;
        }
      }
    }
  }
  .mob-part4-img {
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
    .mob-part4-img-text {
      font-size: 15px;
      line-height: 1.4;
      color: #929292;
      margin-top: 5px;
      margin-bottom: 25px;
    }
  }
  @media screen and (max-width: 767.99px) {
    .mob-part4-text {
      padding-top: 60px;
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part4-title {
        margin-bottom: 9px;
        font-size: 30px;
      }

      .mob-part4-chart-text {
        margin-bottom: 35px;
      }
      .mob-part4-chart {
        margin-bottom: 41px;
      }
      .mob-part4ーsubtitle {
        font-size: 30px;
        margin-bottom: 10px;
        padding-left: 0;
        padding-right: 0;
      }
      .mob-part4-today-list {
        font-size: 18px;
        margin-bottom: 20px;
        li {
          margin-bottom: 20px;
        }
      }
    }
    .mob-part4-img {
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part4-img-text {
        font-size: 15px;
        margin-top: 6.5px;
        margin-bottom: 40px;
      }
    }
  }
  @media screen and (max-width: 374.99px) {
    .mob-part4-text {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part4-title {
        margin-bottom: 10px;
      }
      .mob-part4-chart {
        margin-bottom: 35px;
      }
    }
    .mob-part4-img {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part4-img-text {
        margin-top: 5.4px;
        margin-bottom: 26px;
      }
    }
  }
}
</style>
