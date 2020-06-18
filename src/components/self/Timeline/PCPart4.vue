<template>
  <div class="d-flex h-100" style="width:107vw">
    <div class="part4-direction-wrapper">
      <div class="part4-direction">
        <h2 class="part4-title">教改方向：鬆綁、適性</h2>
        <ul class="part4-list">
          <li>
            1994年9月，行政院教育改革審議委員會成立，由時任中央研究院院長的李遠哲擔任教改會召集人。
          </li>
          <li>1996年教改會向行政院提出《教育改革總諮議報告書》。</li>
          <li>
            改革方向：
            <span class="bold">
              教育鬆綁、適性揚才、暢通升學管道、提升教育品質、建立終身學習
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="part4-image-wrapper">
      <div class="part4-image">
        <img :class="{ active }" :src="img" alt />
        <div>
          圖為1995年教育改革審議委員會第10次委員會議，教改會召集人李遠哲（圖左）接見陳情的文大「草山學會」學生，並接受學生的陳情書。圖／報系資料照
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PCPart4",
  props: { active: { type: Boolean, default: false }, img: { type: String } },
};
</script>
<style lang="scss" scoped>
.part4-direction-wrapper {
  width: 49.69vw;
  position: relative;
  .part4-direction {
    position: absolute;
    top: 27.22%;
    left: 0;
  }
}

.part4-title {
  height: 58px;
  font-size: 40px;
  font-family: SourceHanSansTW-Bold;
  font-weight: bold;
  line-height: 1.88;
  text-align: left;
  color: #000000;
  margin-bottom: 15px;
}
.part4-list {
  line-height: 1.7;
  text-align: left;
  color: #000000;
  li {
    position: relative;
    padding-left: 22px;
    font-family: SourceHanSansTW-Regular;
    font-size: 20px;
    max-width: 39vw;
    &::before {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      top: 9px;
      left: 0;
      background-color: #000000;
      border-radius: 50%;
    }
  }
  .bold {
    font-family: SourceHanSansTW-Bold;
    font-weight: bold;
  }
}
.part4-image-wrapper {
  position: relative;
  width: 60.7vw;
  height: 71.39vh;
  .part4-image {
    position: absolute;
    top: 12.36%;
    width: 100%;
    img {
      max-width: 100%;
      max-height: 100%;
      transform: translateY(100%);
      opacity: 0;
      transition: all 2s ease-out;
      &.active {
        transform: translateY(0%);
        opacity: 1;
      }
    }
    div {
      font-family: SourceHanSansTW-Regular;
      font-size: 15px;
      line-height: 1.4;
      text-align: left;
      color: #929292;
    }
  }
}
</style>
