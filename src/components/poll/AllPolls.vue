<template>
  <div class="all-polls">
    <h2 class="all-polls-title">完整民調數字</h2>
    <p class="all-polls-intro">
      《聯合報》於2020年4月15日至5月4日針對1243位民眾、929所學校進行民調：
    </p>
    <div class="all-polls-smallblock" @click="clickFake">
      <span>民眾調查結果</span>
    </div>
    <div class="chart1-area chart">
      <img :src="windowSize.width >= 768 ? imgs.img1.web : imgs.img1.mob" alt />
    </div>
    <div class="chart-area chart">
      <img :src="windowSize.width >= 768 ? imgs.img2.web : imgs.img2.mob" alt />
    </div>
    <p class="chart-text1">以下統計結果為「聽過新課綱」的民眾</p>
    <div class="chart-area chart">
      <img :src="windowSize.width >= 768 ? imgs.img3.web : imgs.img3.mob" alt />
    </div>
    <div class="chart-area chart">
      <img :src="windowSize.width >= 768 ? imgs.img4.web : imgs.img4.mob" alt />
    </div>
    <ArticleCastAnchor title="家長最焦慮升學" />
    <div class="chart-area chart">
      <img :src="windowSize.width >= 768 ? imgs.img5.web : imgs.img5.mob" alt />
    </div>
    <div class="chart-area chart">
      <img :src="windowSize.width >= 768 ? imgs.img6.web : imgs.img6.mob" alt />
    </div>
    <div class="chart-area chart">
      <img :src="windowSize.width >= 768 ? imgs.img7.web : imgs.img7.mob" alt />
    </div>
    <div class="chart-area chart">
      <img :src="windowSize.width >= 768 ? imgs.img8.web : imgs.img8.mob" alt />
    </div>
    <div class="chart-area chart">
      <img :src="windowSize.width >= 768 ? imgs.img9.web : imgs.img9.mob" alt />
    </div>
    <div class="chart-area chart">
      <img
        :src="windowSize.width >= 768 ? imgs.img10.web : imgs.img10.mob"
        alt
      />
    </div>
    <div class="chart-area chart">
      <img
        :src="windowSize.width >= 768 ? imgs.img11.web : imgs.img11.mob"
        alt
      />
    </div>

    <p class="all-polls-remarks">
      註：此次調查於4月15日至20日進行，成功訪問1243位年滿20歲成年民眾，另303人拒訪；在95%的信心水準下，抽樣誤差在正負2.7個百分點以內。調查是以台灣地區住宅電話為母體作尾數兩位隨機抽樣，調查結果依台灣地區20歲以上人口之性別、年齡及縣市結構進行加權。
    </p>
    <ArticleCastAnchor title="7成學校實施困難" />
    <div class="all-polls-border" />
    <div class="all-polls-smallblock" @click="clickFake">
      <span>學校調查結果</span>
    </div>
    <div class="chart-area chart">
      <img
        :src="windowSize.width >= 768 ? imgs.img12.web : imgs.img12.mob"
        alt
      />
    </div>
    <div class="chart-area chart">
      <img
        :src="windowSize.width >= 768 ? imgs.img13.web : imgs.img13.mob"
        alt
      />
    </div>
    <div class="chart-area chart">
      <img
        :src="windowSize.width >= 768 ? imgs.img14.web : imgs.img14.mob"
        alt
      />
    </div>
    <div class="chart-area chart">
      <img
        :src="windowSize.width >= 768 ? imgs.img15.web : imgs.img15.mob"
        alt
      />
    </div>
    <div class="chart-area chart">
      <img
        :src="windowSize.width >= 768 ? imgs.img16.web : imgs.img16.mob"
        alt
      />
    </div>
    <div class="chart-area chart">
      <img
        :src="windowSize.width >= 768 ? imgs.img17.web : imgs.img17.mob"
        alt
      />
    </div>
    <div class="chart-area chart">
      <img
        :src="windowSize.width >= 768 ? imgs.img18.web : imgs.img18.mob"
        alt
      />
    </div>
    <div class="chart-area chart">
      <img
        :src="windowSize.width >= 768 ? imgs.img19.web : imgs.img19.mob"
        alt
      />
    </div>
    <ArticleCastAnchor title="考招制度影響落實" />
    <div class="chart-area chart">
      <img
        :src="windowSize.width >= 768 ? imgs.img20.web : imgs.img20.mob"
        alt
      />
    </div>
    <div class="chart-area chart">
      <img
        :src="windowSize.width >= 768 ? imgs.img21.web : imgs.img21.mob"
        alt
      />
    </div>
    <div class="chart-area chart">
      <img
        :src="windowSize.width >= 768 ? imgs.img22.web : imgs.img22.mob"
        alt
      />
    </div>
    <div class="chart-area chart">
      <img
        :src="windowSize.width >= 768 ? imgs.img23.web : imgs.img23.mob"
        alt
      />
    </div>
    <p class="all-polls-remarks">
      註：此次調查於4月21日至5月4日間進行，成功訪問929所學校（國中661所、高中268所），受訪對象為各校教務主任或指定代理人，以網路問卷、電話訪問、電子郵寄、傳真等方式進行調查，調查結果依學校所在地區偏遠程度進行加權。
    </p>
  </div>
</template>

<script>
import content from "../../data/content";
import { sendGaMethods } from "@/mixins/masterBuilder.js";
import ArticleCastAnchor from "@/components/layout/ArticleCastAnchor";

export default {
  name: "AllPolls",
  props: { windowSize: { type: Object } },
  components: { ArticleCastAnchor },
  data() {
    return { imgs: content.pollImages };
  },
  mixins: [sendGaMethods],
  methods: {
    clickFake() {
      this.sendGA({
        category: "poll",
        action: "click",
        label: "像按鈕的區塊被點擊了",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.all-polls {
  background-color: #f5f5f5;
  text-align: left;
  .all-polls-title {
    font-size: 40px;
    font-weight: bold;
    line-height: 1.6;
    color: #121212;
    padding: 92px 22% 0;
    @media screen and (max-width: 1024.99px) {
      padding: 72px 12.5% 0;
    }
    @media screen and (max-width: 767.99px) {
      padding: 60px 3.6% 0;
    }
  }
  .all-polls-intro {
    font-size: 20px;
    line-height: 1.7;
    color: #000000;
    padding: 10px 22% 0;
    @media screen and (max-width: 1024.99px) {
      padding: 10px 12.5% 0;
    }
    @media screen and (max-width: 767.99px) {
      padding: 20px 3.6% 0;
    }
  }
  .all-polls-smallblock {
    font-size: 20px;
    line-height: 1.7;
    color: #ffffff;
    padding-top: 50px;
    & > span {
      background-color: #424242;
      padding: 11px 13px 10px 12px;
      border-radius: 3px;
    }
    @media screen and (min-width: 1025px) {
      display: flex;
      justify-content: center;
    }
    @media screen and (max-width: 1024.99px) {
      padding-top: 35px;
      padding-left: 12.5%;
      & > span {
        padding: 11px 12px 10px 13px;
      }
    }
    @media screen and (max-width: 767.99px) {
      padding-top: 30px;
      padding-left: 3.9%;
      & > span {
        padding: 7px 11px;
      }
    }
  }
  .chart {
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
    }
  }
  .chart1-area {
    margin-top: 32px;
    @media screen and (max-width: 1024.99px) {
      margin-top: 20px;
    }
    @media screen and (max-width: 767.99px) {
      margin-top: 15px;
    }
    @media screen and (max-width: 410px) {
      margin-left: 16px;
      margin-right: 16px;
    }
  }
  .chart-area {
    margin-top: 25px;
    @media screen and (max-width: 767.99px) {
      margin-top: 20px;
    }
    @media screen and (max-width: 410px) {
      margin-left: 16px;
      margin-right: 16px;
    }
  }
  .chart-text1 {
    padding: 60px 22% 60px;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.7;
    color: #000000;
    @media screen and (max-width: 1024.99px) {
      padding: 60px 12.5% 60px;
    }
    @media screen and (max-width: 767.99px) {
      font-size: 18px;
      padding: 50px 8.9% 50px;
    }
  }
  .chart-text2 {
    text-align: center;
    padding-top: 70px;
    div {
      font-family: arial;
      font-size: 80px;
      font-weight: 900;
      line-height: 1.25;
      color: #eb0f43;
      span {
        font-size: 40px;
      }
    }
    p {
      padding-bottom: 70px;
      font-size: 20px;
      line-height: 1.7;
      color: #000000;
      span {
        font-weight: bold;
      }
    }

    @media screen and (max-width: 767.99px) {
      padding-top: 60px;
      div {
        font-size: 70px;
      }
      p {
        padding-bottom: 60px;
        font-size: 18px;
      }
    }
  }
  .all-polls-remarks {
    font-size: 16px;
    line-height: 1.5;
    color: #999999;
    padding: 25px 22% 72px;
    @media screen and (max-width: 1024.99px) {
      padding: 25px 12.5% 72px;
    }
    @media screen and (max-width: 767.99px) {
      font-size: 15px;
      padding: 15px 3.9% 60px;
    }
  }
  .all-polls-border {
    background-color: #000;
    height: 1px;
    margin: 0 14.8% 72px;
    @media screen and (max-width: 1024.99px) {
      margin: 0 5.7% 72px;
    }
    @media screen and (max-width: 767.99px) {
      margin: 0 3.9% 60px;
    }
  }
}
</style>
