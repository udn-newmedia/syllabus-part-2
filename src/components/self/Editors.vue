<template>
  <div class="editors-wrapper">
    <FooterEditor>
      <div>
        <p>製作人</p>
        <p>洪欣慈</p>
      </div>
      <div>
        <p>網頁設計</p>
        <p>許瑋琳</p>
      </div>
      <div>
        <p>網頁製作</p>
        <p>張庭瑋</p>
      </div>
      <div>
        <p>影像</p>
        <p>影像中心、報系資料庫</p>
      </div>
      <div>
        <p>製作單位</p>
        <p>新媒體中心</p>
      </div>
      <div>
        <p></p>
        <p>視覺設計中心</p>
      </div>
      <div>
        <p></p>
        <p>數據中心</p>
      </div>
      <div>
        <p>監製</p>
        <p>蕭衡倩</p>
      </div>
      <div>
        <p></p>
        <p>2020.07.29</p>
      </div>
    </FooterEditor>
    <div class="share-wrapper">
      <FooterShare />
    </div>
    <div class="questionnaire-wrapper">
      <a
        class="questionnaire"
        href="https://www.surveycake.com/s/KpQKN"
        target="_blank"
      >
        <span>填寫閱讀體驗問卷</span>
      </a>
    </div>
  </div>
</template>

<script>
import FooterShare from "@/components/footer/FooterShare.vue";
import FooterEditor from "@/components/footer/FooterEditor.vue";

export default {
  name: "Editors",
  components: { FooterShare, FooterEditor },
};
</script>
<style lang="scss" scoped>
.editors-wrapper {
  padding-bottom: 70px;
  background-color: #000000;

  .questionnaire-wrapper {
    display: flex;
    justify-content: center;
    .questionnaire {
      &:hover {
        text-decoration: none;
      }
      flex: 0 0 45vw;
      max-width: 45vw;
      @include pad {
        flex: 0 0 75vw;
        max-width: 75vw;
      }
      @include smob {
        flex: 0 0 90.9vw;
        max-width: 90.9vw;
      }
      @media screen and (max-width: 767px) {
        flex: 0 0 90.9vw;
        max-width: 90.9vw;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      height: 10vh;
      border-radius: 8px;
      background-color: #dce4eb;
      // margin-top: 20.56vh;
      span {
        font-size: 18px;
        font-weight: bold;
        line-height: 1.21;
        color: #2a324b;
      }
    }
  }

  .share-wrapper {
    flex: 0 0 100%;
    max-width: 0 0 100%;
    margin-top: 40px;
  }
}
</style>
<style lang="scss">
.editors-wrapper .footer-editor div p {
  color: #fff !important;
}
</style>
