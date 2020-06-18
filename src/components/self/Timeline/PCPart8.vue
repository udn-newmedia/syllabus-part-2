<template>
  <div class="part8-wrapper">
    <div :class="{ active }">
      <p
        class="part8-text"
      >溝通不足與配套措施不夠，許多教育工作者只能在「忙、茫、盲」中度過。一道道令人眼花撩亂的教改方案中，教育目的不斷地異化變質，孩子們對這些「教改大餐」消化不良。</p>
      <div class="part8-quote">
        <p>前教育部長曾志朗。取自2003年民間發表之《教改萬言書》</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PCPart8',
  props: { active: { type: Boolean, default: false } },
}
</script>
<style lang="scss" scoped>
.part8-wrapper {
  display: flex;
  justify-content: center;
  width: 66.4vw;
  height: 100vh;
  padding: 0 100px;
  & > div {
    transform: translateX(100%);
    opacity: 0;
    transition: all 2s ease-out;
    &.active {
      transform: translateX(0%);
      opacity: 1;
    }
    .part8-text {
      font-family: SourceHanSerifTC-SemiBold;
      font-size: 36.8px;
      font-weight: 600;
      line-height: 1.7;
      text-align: left;
      color: #777777;
      margin-top: 27.22vh;
    }
    .part8-quote {
      font-family: SourceHanSerifTC-Medium;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.5;
      text-align: left;
      color: #929292;
      display: flex;
      justify-content: flex-end;
      margin-top: 2.78vh;
    }
  }
}
</style>
