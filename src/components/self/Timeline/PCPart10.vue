<template>
  <div class="row h-100 m-0">
    <div class="col-4 h-100 p-relative">
      <div class="part10-time">
        <h2 class="part10-title">歷時10年籌備的108課綱</h2>
        <div class="part10-list">
          <div>
            斥資
            <strong class="text-main">450</strong>億
          </div>
          <div>歷經藍綠執政</div>
          <div>
            籌備時間長達
            <strong class="text-main">10</strong>年
          </div>
          <div>史上最大一波教育改革</div>
        </div>
      </div>
    </div>
    <div class="col-4 h-100 p-relative">
      <div class="part10-today">
        <h2 class="part10-today-title">各界肯定理念，但如何執行爭議不斷：</h2>

        <ul class="part10-today-list">
          <li>學科時數減少，老師擔心教不完</li>
          <li>「素養」太抽象，老師不會教、家長霧煞煞</li>
          <li>各科領綱、教科書審查匆忙</li>
          <li>學習歷程檔案3隱憂：學校造假、拉大城鄉差距、缺乏鑑別度</li>
          <li>師資、教室不足，選修課難落實</li>
        </ul>
      </div>
    </div>
    <div class="col-4 h-100 p-relative">
      <div class="part10-image">
        <!-- <img class="img-fluid" :src="img.part10Img" alt /> -->
        <div>10多個家長與教育團體昨天前往教育部舉行「還給學生多元教育選擇權、反對區域階級化」的記者會，要求給學生自主決定要唸的學校。家長們針對新任教長潘文忠一上任所宣布的六項教育政策感到不滿，認為未經溝通禾倉促杜建重 20160524 (1)</div>
      </div>
    </div>
  </div>
</template>

<script>
// import part10Img from '@/assets/page1/10th/10th@3x.jpg'

export default {
  name: 'PCPart10',
  props: { active: { type: Boolean, default: false } },
  data() {
    return {
      // img: { part10Img }
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
.part10-time {
  position: absolute;
  top: 30%;
  left: 15%;
}
.part10-title {
  font-size: 40px;
  font-weight: 900;
  line-height: 1.56;
  text-align: left;
  color: #000000;
}
.part10-list {
  list-style-type: disc;
  font-size: 20px;
  line-height: 1.7;
  text-align: left;
  color: #000000;
}
.part10-today {
  position: absolute;
  top: 32%;
  padding: 0 5% 0;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.13;
  text-align: left;
  color: #000000;
  .part10-today-title {
    font-size: 25px;
    font-weight: bold;
    line-height: 1.36;
    text-align: left;
    color: #000000;
  }
  .part10-today-list {
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
.part10-image {
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
