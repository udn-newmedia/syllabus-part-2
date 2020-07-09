<template>
  <div class="d-flex">
    <div class="part11-text">
      <div class="part11-1year-wrapper">
        <div class="part11-1year">
          <h2 class="part11-title">2020年：108課綱上路1年後</h2>
          <h3 class="part11-subtitle">《聯合報》針對1243位民眾、929所學校進行民調後發現：</h3>
          <ul class="part11-list">
            <li>
              <span class="strong-red">6成</span>以上民眾沒聽過108課綱；聽過的人，
              <span class="strong-red">8成</span>不清楚課綱內容
            </li>
            <li>
              <span class="strong-red">3成</span>家長不知道孩子是不是適用108課綱
            </li>
            <li>
              <span class="strong-red">7成</span>國高中實施108課綱遇到困難
            </li>
            <li>
              <span class="strong-black">課程進度、考招制度、師資專業、素養教學</span>讓學校卡卡
            </li>
            <li>升學仍讓家長感到焦慮</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="part11-image-wrapper">
      <div class="part11-image">
        <img class="img-fluid" :class="{ active }" :src="img" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PCpart11',
  props: { active: { type: Boolean, default: false }, img: { type: String } },
}
</script>
<style lang="scss" scoped>
.part11-text {
  display: flex;
  width: 570px;
  height: 100vh;
  .part11-1year-wrapper {
    position: relative;
    height: 100%;
    width: 500px;
    margin-right: 70px;
    .part11-1year {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      top: 27.22%;
      left: 0;
      width: 500px;
      .part11-title {
        font-size: 40px;
        font-weight: bold;
        line-height: 1.56;
        text-align: left;
        color: #000000;
      }
      .part11-subtitle {
        font-size: 20px;
        font-weight: bold;
        line-height: 1.7;
        text-align: left;
        color: #000000;
        margin-top: 14px;
      }
      .part11-list {
        line-height: 1.7;
        text-align: left;
        color: #000000;
        li {
          position: relative;
          padding-left: 22px;
          font-size: 20px;
          &::before {
            content: '';
            position: absolute;
            width: 12px;
            height: 12px;
            top: 9px;
            left: 0;
            background-color: #000000;
            border-radius: 50%;
          }
          .strong-red {
            font-weight: bold;
            color: #eb0f43;
          }
          .strong-black {
            font-weight: bold;
          }
        }
      }
    }
  }
}

.part11-image-wrapper {
  width: 416px;
  height: 100vh;
  position: relative;
  .part11-image {
    height: 68.8vh;
    position: absolute;
    top: 89px;
    img {
      width: 100%;
      max-height: 100%;
      transform: translateY(100%);
      opacity: 0;
      transition: all 0.5s ease-out;
      &.active {
        transform: translateY(0%);
        opacity: 1;
      }
    }
  }
}
</style>
