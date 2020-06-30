<template>
  <div class="main-title">
    <div class="title-text">
      <div :class="{ active }">
        <div class="text-1">教改是全民的，與社會脫離不了關係，如果社會不改善，教育也沒有辦法改革。</div>
        <div class="text-2">1994.10.29</div>
        <div class="text-2">行政院教育改革審議委員會召集人李遠哲</div>
      </div>
    </div>
    <div class="title-img">
      <img :class="{ active }" :src="img" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PCPart2',
  props: { active: { type: Boolean, default: false }, img: { type: String } },
}
</script>

<style lang="scss" scoped>
.main-title {
  display: flex;
  background-color: #000;
  .title-text {
    width: 84.77vw;
    display: flex;
    justify-content: center;
    margin: 27.2vh 0 20px 0;
    & > div {
      transform: translateX(100%);
      opacity: 0;
      transition: all 2s ease-out;
      &.active {
        transform: translateX(0%);
        opacity: 1;
      }
    }
    .text-1 {
      font-size: 36.8px;
      font-family: source-han-serif-tc, sans-serif;
      font-weight: 600;
      line-height: 1.7;
      text-align: left;
      width: 550px;
      color: #eeeeee;
      padding-bottom: 20px;
    }
    .text-2 {
      font-size: 20px;
      font-family: source-han-serif-tc, sans-serif;
      font-weight: 500;
      line-height: 1.5;
      text-align: left;
      color: #929292;
    }
  }
  .title-img {
    width: 60.7vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    img {
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 3s ease-in-out;
      &.active {
        opacity: 1;
      }
    }
  }
}
</style>
