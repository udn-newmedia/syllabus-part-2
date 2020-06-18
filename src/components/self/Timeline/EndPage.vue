<template>
  <div class="end-page-wrapper">
    <div>
      <p class="end-page-text">這一次教改，有機會改變台灣長年以考試為目標、填鴨式教學的升學風氣嗎？</p>
      <div class="arrow-wrapper">
        <font-awesome-icon :icon="['fas','angle-double-down']" size="4x" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EndPage',
}
</script>
<style lang="scss" scoped>
.end-page-wrapper {
  display: flex;
  height: 100vh;
  width: 100vw;
  .end-page-text {
    font-family: SourceHanSerifTC;
    font-size: 36.8px;
    font-weight: 600;
    line-height: 1.7;
    text-align: left;
    color: #777777;
    padding: 23% 46.48% 6.79% 0;
  }
  .arrow-wrapper {
    color: #ababab;
    display: flex;
    justify-content: center;
  }
}
</style>
