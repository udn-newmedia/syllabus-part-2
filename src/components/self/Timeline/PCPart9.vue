<template>
  <div class="row h-100 m-0">
    <div class="col-4 h-100 p-relative">
      <div class="part9-time">
        <h2 class="part9-title">下一波教改：十二年國教、免試入學</h2>
        <ul class="part9-list">
          <li>
            <strong>2011年：</strong>
            前總統馬英九宣布啟動十二年國民基本教育
          </li>
          <li>
            <strong>2014年：</strong>國中教育會考上路，國中升學分為「免試入學」和「特色招生」
          </li>
        </ul>
      </div>
    </div>
    <div class="col-4 h-100 p-relative">
      <div class="part9-today">
        <h2 class="part9-today-title">2020年的今天：</h2>
        <ul class="part9-today-list">
          <li>
            <div class="text-main mt-3">「免試」不是真免試：</div>
            <p>報名人數若超過學校招生名額，將進行「超額比序」：會考成績、志願序、多元學習表現</p>
          </li>
          <li>
            <div class="text-main mt-3">明星高中搶破頭：</div>
            <p>有些縣市已幾乎全面免試；但部分縣市明星高中光環仍在，升學壓力沒減輕</p>
          </li>
          <li>
            <div class="text-main mt-3">多元背後還有爭議：</div>
            <p>學測造成高三學習不完整、申請入學不利弱勢學生、多元入學變多錢入學</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-4 h-100 p-relative">
      <div class="part9-image">
        <!-- <img class="img-fluid" :src="img.part9Img" alt /> -->
        <div>十二年國教家長聯盟昨天在教育部外抗議，要求教育部對會考填志願制度提出補救措施，有家長帶著孩子前來聲援。記者王騰毅／攝影</div>
      </div>
    </div>
  </div>
</template>

<script>
// import part9Img from '@/assets/page1/9th/9th@3x.jpg'

export default {
  name: 'PCPart9',
  props: { active: { type: Boolean, default: false } },
  data() {
    return {
      // img: { part9Img }
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
.part9-time {
  position: absolute;
  top: 30%;
  left: 15%;
}
.part9-title {
  font-size: 40px;
  font-weight: 900;
  line-height: 1.56;
  text-align: left;
  color: #000000;
}
.part9-list {
  list-style-type: disc;
  font-size: 20px;
  line-height: 1.7;
  text-align: left;
  color: #000000;
}
.part9-today {
  position: absolute;
  top: 33%;
  padding: 0 10% 0;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.13;
  text-align: left;
  color: #000000;
  .part9-today-title {
    font-size: 30px;
    font-weight: bold;
    line-height: 1.13;
    text-align: left;
    color: #000000;
  }
  .part9-today-list {
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
.part9-image {
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
