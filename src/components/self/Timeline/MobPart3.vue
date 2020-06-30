<template>
  <div class="mob-part3">
    <div class="mob-part3-text">
      <h1 class="mob-part3-title">教改方向：鬆綁、適性</h1>
      <ul class="mob-part3-list">
        <li>1994年9月，行政院教育改革審議委員會成立，由時任中央研究院院長的李遠哲擔任教改會召集人。</li>
        <li>1996年教改會向行政院提出《教育改革總諮議報告書》。</li>
        <li>
          改革方向：
          <span>教育鬆綁、適性揚才、暢通升學管道、提升教育品質、建立終身學習。</span>
        </li>
      </ul>
    </div>
    <div class="mob-part3-img">
      <img
        class="img-fluid"
        :class="{ active }"
        :src="windowSize.width >= 768 ? img.pad : img.mob"
        alt
      />
      <p
        class="mob-part3-img-text"
      >圖為1995年教育改革審議委員會第10次委員會議，教改會召集人李遠哲（圖左）接見陳情的文大「草山學會」學生，並接受學生的陳情書。圖／報系資料照</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobPart3',
  props: {
    windowSize: { type: Object },
    img: { type: Object },
    active: { type: Boolean },
  },
}
</script>

<style lang="scss" scoped>
.mob-part3 {
  text-align: left;
  .mob-part3-text {
    padding-top: 72px;
    padding-left: 14.3%;
    padding-right: 7.8%;
    font-family: source-han-sans-traditional, sans-serif;
    .mob-part3-title {
      margin-bottom: 15px;

      font-size: 40px;
      font-weight: bold;
      line-height: 1.56;
    }
    .mob-part3-list {
      font-size: 20px;
      line-height: 1.7;
      margin-bottom: 30px;
      li {
        position: relative;
        padding-left: 22px;
        &::before {
          position: absolute;
          top: 9px;
          left: 0;
          content: '';
          background-color: #000;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        & > span {
          font-weight: bold;
        }
      }
    }
    // .mob-part3-content {
    //   margin-bottom: 30px;
    //   font-family: source-han-serif-tc, serif;
    //   font-size: 30px;
    //   font-weight: 600;
    //   line-height: 1.7;
    //   color: #777777;
    // }
  }
  .mob-part3-img {
    padding-left: 14.3%;
    padding-right: 7.8%;
    img {
      max-width: 100%;
      transition: all 2s ease-out;
      transform: translateX(-100%);
      opacity: 0;
      &.active {
        transform: translateX(0%);
        opacity: 1;
      }
    }
    .mob-part3-img-text {
      font-family: source-han-sans-traditional, sans-serif;
      font-size: 15px;
      line-height: 1.4;
      color: #929292;
      margin-top: 5px;
      margin-bottom: 25px;
    }
  }
  @media screen and (max-width: 767.99px) {
    .mob-part3-text {
      padding-top: 60px;
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part3-title {
        margin-bottom: 9px;
        font-size: 30px;
      }
      .mob-part3-list {
        font-size: 18px;
        li {
          padding-left: 22px;
          &::before {
            top: 8px;
          }
        }
      }
      //   .mob-part3-content {
      //     margin-bottom: 30px;
      //     font-size: 30px;
      //   }
    }
    .mob-part3-img {
      padding-left: 9.7%;
      padding-right: 3.9%;
      .mob-part3-img-text {
        font-size: 15px;
        margin-top: 6.5px;
        margin-bottom: 40px;
      }
    }
  }
  @media screen and (max-width: 374.99px) {
    .mob-part3-text {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part3-title {
        margin-bottom: 10px;
      }
      .mob-part3-list {
        li {
          padding-left: 24px;
          &::before {
            top: 8px;
          }
        }
      }
    }
    .mob-part3-img {
      padding-left: 10%;
      padding-right: 2.5%;
      .mob-part3-img-text {
        margin-top: 5.4px;
        margin-bottom: 26px;
      }
    }
  }
}
</style>
