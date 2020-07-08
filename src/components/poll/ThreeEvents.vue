<template>
  <div class="three-events">
    <p class="three-events-content">
      108課綱上路1年，《聯合報》針對全台929所國高中、1243位民眾進行民調，近5成（48.7%）民眾認為台灣教育制度需要改革，但對於政府推動的新課綱改革與宣導，
      <span
        class="bold"
      >五成八民眾認為宣導不足，超過六成民眾沒聽過108課綱</span>，與教改切身相關的家長雖都聽過，但有七成坦承不清楚新課綱實施理念與改變的內容。
    </p>
    <p
      class="three-events-content"
    >對於實施新課綱，有38.8%表示擔憂、焦慮。關於新課綱的變革，民眾最擔心的仍是升學制度（37.2%），其次是素養學習（22.9%）、必修時數減少（21.7%）、生涯引導（20.1%）及多元選修增加（18.7%）。</p>
    <p class="three-events-content">
      學校端的民調反應更熱烈，我們收到300多所學校第一線教師親筆寫下的教改心聲。
      <span
        class="bold"
      >七成六高中、六成七國中表示新課綱實施後遭遇問題與困難，包括跨領域備課難執行，也有不少學校反映工作增加、師資不足</span>。超過六成的學校對於素養教學一籌莫展，更有將近七成學校認為政府提供的配套措施嚴重不足。
    </p>
    <p
      class="three-events-content"
    >從教師親筆寫下的教改心聲中梳理發現，教師現在就像「夾心餅乾」，夾在課程鬆綁和升學壓力之間。他們想落實理想性高的政策，卻要面對配套尚未到位的教學現場。同時，他們還得承受一直調整的考招制度與家長對升學的期待，夾在理想與現實之間動彈不得。</p>
    <p
      class="three-events-content"
    >從1994年台灣啟動教改以來，數十年來教育政策的壓力都壓迫在教師身上，社會卻忽略了他們跟你我一樣，多數在舊教育體制下成長，有教師提出應該定期舉辦教師版的「108課綱線上測驗」，完成研習的教師才能拿到好考績，畢竟舊教育體制下長大的教師，面對新課綱也得像學生一樣重新學習。</p>
    <p
      class="three-events-content"
    >還有許多教師，有心改變卻不知如何著手。新課綱強調「素養導向教學」，希望教師改變過去填塞課本的教學方式，以生活化情境引導學生思考、討論、實作，有超過六成學校反映推動素養教學遇到困難，原因之一就是教師無相關專業和經驗。</p>
    <p class="three-events-content">
      家長對於升學制度的焦慮，也反映在教學現場。尤其新課綱強調素養教學，但七成六的國中表示國中會考制度將是教改殺手，考招制度讓新課綱無法落實。高中端更反映推動素養教學，最大的困難是課程進度壓力大（59.9%）；八成四的高中認為大學考招制度會影響新課綱落實，最大原因是得面對
      <span
        class="bold"
      >家長以升學為重的壓力</span>（82.4%）。
    </p>
    <p
      class="three-events-content"
    >教改現場有焦慮的家長，以及壓力滿載的教師，新課綱究竟能不能翻轉教育沉痾，以下是一般民眾與教學現場的民調結果。文末，我們也把上百位教師提出來的建議完整公開，拋磚引玉，期待教改能讓孩子擁有更好的未來。</p>
  </div>
</template>

<script>
export default {
  name: 'ThreeEvents',
}
</script>
<style lang="scss" scoped>
.three-events {
  padding: 78px 22% 72px;
  text-align: left;
  color: #121212;
  // .three-events-title {
  //   margin-bottom: 16px;
  //   font-size: 40px;
  //   font-weight: bold;
  //   line-height: 1.6;
  // }
  .three-events-content {
    margin-bottom: 51px;
    font-size: 20px;
    line-height: 1.7;
    .bold {
      font-weight: bold;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024.98px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
    .three-events-content {
      width: 576px;
      margin: auto;
    }
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
