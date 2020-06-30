<template>
  <div class="three-events">
    <h2 class="three-events-title">政府該正視的三件事</h2>
    <p class="three-events-content" v-for="data in dataArray" :key="data.id">
      {{ data.text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ThreeEvents",
  data() {
    const dataArray = [
      {
        text:
          "民調結果顯示，聽過新課綱的民眾中，有38.8%感到擔憂、焦慮，擔憂主因為升學制度變複雜、對過去教改經驗沒信心；國中、高中推動新課綱過程中最擔心的也是考招制度，國中擔心教育會考，高中得顧考試又顧多元表現，老師、學生壓力都很大。",
        id: "ThreeEvents1-1",
      },
      {
        text:
          "108課綱理念雖好，但不可能僅靠美好口號來翻轉社會，家長和學校需要實例來增加信心。在長達半年的追蹤採訪中，我們看到不少學校勇於革新，推動108課綱、改變教學方法的同時，學生也因此學得更好，學力明顯提升，如台北市北政國中、高雄市田寮國中、宜蘭縣利澤國中等，這些案例都是最好的強心劑。",
        id: "ThreeEvents1-2",
      },
      {
        text:
          "第二，這次民調我們收到929所學校的回應，其中76%高中、67.3％國中實施新課綱後遇到困難，包括師資、備課、行政負擔等。929所已是全台灣國高中總數的74%，遇到困難的學校絕非少數。",
        id: "ThreeEvents2-1",
      },
      {
        text:
          "從課綱公布至今，每當遇到爭議或亂象，教育部總說是「少數學校」，但從民調結果，許多問題顯然是教學現場普遍實況，政府該正視，鴕鳥心態無助課綱推動；此外，部分學校對新課綱仍在觀望，教育部在協助學校同時也需展現魄力，透過課程審查、補助機制讓各校意識到課綱「玩真的」。",
        id: "ThreeEvents2-2",
      },
      {
        text:
          "第三件事，是喚起社會對教育改革的共感與支持。許多學校在民調問卷的意見欄寫到，課綱推動很需要社會支持和家長、教師改觀，過去26年教改經驗發現，台灣的教育總是制度在變、心態不變，九年一貫推動之初轟轟烈烈，但最後也在各界反彈、制度妥協下名存實亡，學生只是負擔加重，卻沒有真正落實九年一貫想推行的理念與方向。",
        id: "ThreeEvents3-1",
      },
      {
        text:
          "這次民調顯示，有6成民眾沒聽過新課綱、7成家長不清楚新課綱內容，代表政策溝通明顯失效，教育部針對課綱辦過多場說明會，但「溝通」不是有說就好，政策需要經過轉化，成為家長和民眾能理解的語言，才能達到溝通成效。當社會對改革「有感」，改變才有機會發生。",
        id: "ThreeEvents3-2",
      },
    ];

    return { dataArray };
  },
};
</script>
<style lang="scss" scoped>
.three-events {
  padding: 78px 22% 0;
  text-align: left;
  color: #121212;
  .three-events-title {
    margin-bottom: 16px;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.6;
  }
  .three-events-content {
    margin-bottom: 51px;
    font-size: 20px;
    line-height: 1.7;
  }
  @media screen and (max-width: 1024.99px) {
    padding: 72px 12.5% 0;
    .three-events-content {
      margin-bottom: 72px;
    }
  }
  @media screen and (max-width: 767.99px) {
    padding: 60px 3.9% 0;
    .three-events-title {
      margin-bottom: 7px;
      font-size: 28px;
      line-height: 1.3;
    }
    .three-events-content {
      margin-bottom: 60px;
      font-size: 18px;
    }
  }
}
</style>
