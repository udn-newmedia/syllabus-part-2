<template>
  <div class="schools">
    <h2>各校提解方</h2>
    <p>各校回覆問卷調查時都踴躍填寫心聲與建議，我們總共收到318則學校的誠摯呼喊，《聯合報》歸納出四大建議方向，將這些寶貴意見原文呈現，共同為台灣教育尋找出路：</p>
  </div>
</template>

<script>
export default {
  name: 'Schools',
}
</script>
<style lang="scss" scoped>
.schools {
  text-align: left;
  h2 {
    margin: 99px 22% 0;
    font-family: 'Noto Sans TC', 'Microsoft JhengHei', Roboto, sans-serif;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.56;
    color: #000000;
  }
  p {
    margin: 6px 22% 73px;
    font-size: 20px;
    line-height: 1.7;
    color: #121212;
  }

  @media screen and (max-width: 1024.99px) {
    h2 {
      margin: 100px 12.5% 0;
    }
    p {
      margin: 13px 12.5% 72px;
    }
  }
  @media screen and (max-width: 767.99px) {
    h2 {
      margin: 80px 3.9% 0;
      font-size: 28px;
    }
    p {
      margin: 7px 3.9% 15px;
      font-size: 18px;
    }
  }
  h2,
  p {
    @media screen and (min-width: 768px) and (max-width: 1024.98px) {
      width: 576px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
