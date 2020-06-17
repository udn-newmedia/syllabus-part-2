<template>
  <div class="row h-100 m-0">
    <div class="col-4 h-100 p-relative">
      <div class="part7-change">
        <h2 class="part7-title">課程重大變革：九年一貫</h2>
        <ul class="part7-list mt-3">
          <li>
            2001年實施，是當時台灣教育史上幅度最大的課程改革
            影響全國小學、國中學生
          </li>
          <li>主要變革在於「能力」取代「學科知識」，分科學習改成7大學習領域</li>
          <li>推動彈性時間、鼓勵各校自編特色課程</li>
        </ul>
      </div>
    </div>
    <div class="col-4 h-100 p-relative">
      <div class="part7-today">
        <h2 class="part7-today-title">2020年的今天：</h2>
        <ul class="part7-today-list">
          <li>
            <p>
              <span class="text-main">小學課程更活潑，但國中難落實</span>
              ，彈性時間淪為學科加課、合科教學形式化
            </p>
          </li>
          <li>
            <div class="mt-3 text-main">各界檢討聲浪：</div>
            <ul>
              <li>1. 政策上路太匆忙、缺乏溝通</li>
              <li>2. 缺乏研究基礎支撐</li>
              <li>3. 國中升學壓力未鬆綁</li>
              <li>4. 師資能力未轉型</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-4 h-100 p-relative">
      <div class="part7-image">
        <!-- <img class="img-fluid" :src="img.part7Img" alt /> -->
        <div>教育部啟動九年一貫課綱改修正工程，全面檢討授課時數、課程領域、重大議題，最快105學年度開始實施。小朋友沈重的書包會減輕嗎 (1)</div>
      </div>
    </div>
  </div>
</template>

<script>
// import part7Img from '@/assets/page1/7th/7th@3x.jpg'

export default {
  name: 'PCPart7',
  props: { active: { type: Boolean, default: false } },
  data() {
    return {
      // img: { part7Img }
    }
  },
}
</script>
<style lang="scss" scoped>
.text-main {
  color: #00ccb1;
}
.p-relative {
  position: relative;
}
.part7-change {
  position: absolute;
  top: 30%;
  left: 15%;
}
.part7-title {
  font-size: 40px;
  font-weight: 900;
  line-height: 1.56;
  text-align: left;
  color: #000000;
}
.part7-list {
  list-style-type: disc;
  font-size: 20px;
  line-height: 1.7;
  text-align: left;
  color: #000000;
}
.part7-today {
  position: absolute;
  top: 33%;
  padding: 0 10% 0;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.13;
  text-align: left;
  color: #000000;
  .part7-today-title {
    font-size: 30px;
    font-weight: bold;
    line-height: 1.13;
    text-align: left;
    color: #000000;
  }
  .part7-today-list {
    list-style-type: disc;
    font-size: 20px;
    line-height: 1.7;
    text-align: left;
    color: #000000;
    & > li {
      h4 {
        color: #00ccb1;
      }
    }
  }
}
.part7-image {
  position: absolute;
  top: 10%;
  div {
    font-size: 15px;
    line-height: 1.4;
    text-align: left;
    color: #929292;
  }
}
</style>
