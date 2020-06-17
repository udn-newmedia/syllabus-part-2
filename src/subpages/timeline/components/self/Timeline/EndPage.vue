<template>
  <div class="row h-100 w-100 justify-content-center align-items-center">
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
  name: 'EndPage'
}
</script>
<style lang="scss" scoped>
.end-page-text {
  font-family: SourceHanSerifTC;
  font-size: 36.8px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: normal;
  text-align: left;
  color: #777777;
  padding: 0 20% 0;
}
.arrow-wrapper {
  color: #ababab;
  display: flex;
  justify-content: center;
}
</style>
