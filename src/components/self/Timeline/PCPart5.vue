<template>
  <div class="d-flex">
    <div class="part5-text">
      <div class="part5-graph-wrapper">
        <div class="part5-graph">
          <h2 class="part5-title">鬆綁：廣設高中大學</h2>
          <p>在教改訴求與政策引導下，高中、大學數量激增，1994年到2019年間，大學錄取率從44%成長到100%</p>
          <img :src="img[0]" alt />
        </div>
      </div>
      <div class="part5-today-wrapper">
        <div class="part5-today">
          <div class="part5-today-title">
            <span>2020年的今天</span>
          </div>
          <ul class="part5-today-list">
            <li>
              <div class="part5-today-list-subtitle">學歷貶值：</div>
              <div>
                教育資源增加，人人都有機會上高中和大學，但造成
                <span>學歷貶值</span>，高學歷高失業。
              </div>
            </li>
            <li>
              <div class="part5-today-list-subtitle">「人生勝利組」定型：</div>
              <div>
                社會形塑出「
                <span>上高中大學＝成功</span>」氣氛，追求明星高中、名牌大學，技職體系價值感低落。
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="part5-image-wrapper">
      <div class="part5-image">
        <img class="img-fluid" :class="{ active }" :src="img[1]" alt />
        <div>廣設大學造成學歷貶值，高學歷變成高失業，圖為補習班的廣告口號。圖／報系資料照</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PCPart5',
  props: { active: { type: Boolean, default: false }, img: { type: Array } },
}
</script>
<style lang="scss" scoped>
.part5-text {
  display: flex;
  width: 1140px;
  height: 100vh;
  .part5-graph-wrapper {
    position: relative;
    height: 100%;
    width: 500px;
    margin-right: 70px;
    .part5-graph {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      top: 27.22%;
      left: 0;
      width: 500px;
      .part5-title {
        font-size: 40px;
        font-weight: bold;
        line-height: 1.56;
        text-align: left;
        color: #000000;
      }
      p {
        font-size: 20px;
        line-height: 1.7;
        text-align: left;
        color: #000000;
        margin: 15px 0 23px;
        padding-right: 0%;
        // @media screen and (min-width: 1280.1px) {
        //   padding-right: 25%;
        // }
      }
      img {
        max-width: 100%;
      }
    }
  }
  .part5-today-wrapper {
    position: relative;
    height: 100%;
    width: 500px;
    margin-right: 70px;
    .part5-today {
      position: absolute;
      top: 27.5%;
      // padding: 0 10% 0 10%;
      .part5-today-title {
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
      .part5-today-list {
        list-style-type: none;
        font-size: 20px;
        line-height: 1.7;
        text-align: left;
        color: #000000;
        li {
          margin: 12px 0 8px;
          .part5-today-list-subtitle {
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

.part5-image-wrapper {
  width: 416px;
  height: 100vh;
  position: relative;
  .part5-image {
    height: 68.8vh;
    position: absolute;
    top: 89px;
    img {
      width: 100%;
      max-height: 100%;
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
