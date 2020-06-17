<template>
  <div class="row h-100 m-0">
    <div class="col-5 h-100 p-relative">
      <div class="part11-direction">
        <h2 class="part11-title">2020年：108課綱上路1年後</h2>
        <div class="part11-subtitle">《聯合報》針對1200位民眾、929所學校進行民調後發現：</div>
        <ul class="part11-list mt-3">
          <li>
            <strong>6成</strong>以上民眾沒聽過108課綱；聽過的人，
            <strong>8成</strong>不清楚課綱內容
          </li>
          <li>
            <strong>3成</strong>家長不知道孩子是不是適用108課綱
          </li>
          <li>
            <strong>7成</strong>國高中實施108課綱遇到困難
          </li>
          <li>
            <strong>課程進度、考招制度、師資專業、素養教學</strong>讓學校卡卡
          </li>
          <li>升學仍讓家長感到焦慮</li>
        </ul>
      </div>
    </div>
    <div class="col-7 h-100 p-relative">
      <div class="part11-image">
        <!-- <img class="img-fluid" :src="img.part11Img" alt /> -->
        <div>進入理想的高中，卻成了「窄門」，真正的免試入學，何時才能實踐。記者陳雨鑫／攝影</div>
      </div>
    </div>
  </div>
</template>

<script>
// import part11Img from '@/assets/page1/11th/11th@3x.jpg'

export default {
  name: 'PCPart11',
  data() {
    return {
      // img: { part11Img }
    }
  },
}
</script>
<style lang="scss" scoped>
.p-relative {
  position: relative;
}
.part11-direction {
  position: absolute;
  top: 30%;
  left: 10%;
  padding-right: 10%;
}
.part11-title {
  font-size: 40px;
  font-weight: 900;
  line-height: 1.56;
  text-align: left;
  color: #000000;
}
.part11-subtitle {
  font-size: 20px;
  line-height: 1.7;
  text-align: left;
  color: #000000;
}
.part11-list {
  list-style-type: disc;
  font-size: 20px;
  line-height: 1.7;
  text-align: left;
  color: #000000;
}
.part11-image {
  position: absolute;
  top: 0;
  div {
    font-size: 18px;
    line-height: 1.4;
    text-align: left;
    color: #929292;
  }
}
</style>
