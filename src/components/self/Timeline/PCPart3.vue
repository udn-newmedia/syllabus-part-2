<template>
  <div class="d-flex">
    <div class="part3-text row m-0">
      <div class="part3-content">
        <div class="part3-time">
          <h2 class="part3-title">教改序幕：410大遊行</h2>
          <ul class="part3-list">
            <li>
              <span>時間：</span>1994年4月10日
            </li>
            <li>
              <span>參與者：</span>200多個民間團體、3萬民眾
            </li>
            <li>
              <span>訴求：</span>落實小班小校、廣設高中大學、推動教育現代化、制定教育基本法
            </li>
          </ul>
        </div>
      </div>
      <div class="part3-content">
        <div class="part3-quote" :class="{ active }">
          <p>為下一代而走。</p>
          <p>我們要的不多，只希望孩子能有一個好的教育環境，過個快樂童年。</p>
        </div>
      </div>
    </div>
    <div class="part3-image-wrapper">
      <div class="part3-image">
        <img class="img-fluid" :class="{ active }" :src="img" alt />
        <div>民間團體發動「410教育改造運動」，匯集了上萬民眾參與，傳達民間的教育改革理念。圖為1994年遊行情形。圖／報系資料照</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PCPart3',
  props: { active: { type: Boolean, default: false }, img: { type: String } },
}
</script>
<style lang="scss" scoped>
.p-relative {
  position: relative;
}

.part3-text {
  width: 1140px;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  .part3-content {
    flex: 0 0 500px;
    max-width: 500px;
    position: relative;
    margin-right: 70px;
  }
}
.part3-time {
  position: absolute;
  top: 27.22%;
  left: 0;
}
.part3-title {
  font-size: 40px;
  font-weight: bold;
  line-height: 1.56;
  text-align: left;
  color: #000000;
}
.part3-list {
  line-height: 1.7;
  text-align: left;
  color: #000000;
  li {
    position: relative;
    padding-left: 22px;
    font-size: 20px;
    // max-width: 39vw;
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
  }
  span {
    font-weight: bold;
  }
}
.part3-quote {
  position: absolute;
  top: 28.06%;
  font-family: source-han-serif-tc, sans-serif;
  font-weight: 600;
  line-height: 1.39;
  text-align: left;
  color: #777777;
  p {
    height: 8.61vh;
    // width: 38.75vw;
    font-size: 36px;
  }
  transform: translateX(100%);
  opacity: 0;
  transition: all 0.5s ease-out;
  &.active {
    transform: translateX(0%);
    opacity: 1;
  }
  // padding: 0 9% 0;
}

.part3-image-wrapper {
  // max-width: 32.5vw;
  width: 416px;
  height: 100vh;
  position: relative;
  .part3-image {
    position: absolute;
    top: 89px;
    img {
      max-height: 68.75vh;
      @media screen and (min-width: 1281px) {
        width: 100%;
      }
      transform: translateY(100%);
      opacity: 0;
      transition: all 0.5s ease-out;
      &.active {
        transform: translateY(0%);
        opacity: 1;
      }
    }
    div {
      font-size: 15px;
      line-height: 1.4;
      text-align: left;
      color: #929292;
    }
  }
}
</style>
