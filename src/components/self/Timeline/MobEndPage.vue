<template>
  <div class="mob-end-page">
    <div class="mob-end-page-text mob-end-page-quote">
      <p class="mob-end-page-quote-text">這一次教改，有機會改變台灣長年以考試為目標、填鴨式教學的升學風氣嗎？</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobEndPage',
}
</script>

<style lang="scss" scoped>
.mob-end-page {
  text-align: left;
  .mob-end-page-text {
    margin-top: 100px;
    margin-bottom: 100px;
    padding-left: 12.5%;
    padding-right: 12.5%;
    // font-family: source-han-serif-tc, serif;
    color: #777777;
    .mob-end-page-quote-text {
      font-size: 36.8px;
      font-weight: 500;
      line-height: 1.7;
    }
  }
  @media screen and (max-width: 767.99px) {
    .mob-end-page-text {
      margin-top: 120px;
      margin-bottom: 120px;
      padding-left: 6.5%;
      padding-right: 6.5%;
      .mob-end-page-quote-text {
        font-size: 30px;
        font-weight: 600;
        line-height: 1.83;
      }
    }
  }
}
</style>