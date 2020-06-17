<template>
  <div class="editors-wrapper">
    <div class="list-item text-right">製作人</div>
    <div class="list-item text-left">洪欣慈</div>
    <div class="list-item text-right">網頁設計</div>
    <div class="list-item text-left">許瑋琳</div>
    <div class="list-item text-right">網頁製作</div>
    <div class="list-item text-left">張庭瑋、楊若榆</div>
    <div class="list-item text-right">影像</div>
    <div class="list-item text-left">影像中心、報系資料庫</div>
    <div class="list-item text-right">製作單位</div>
    <div class="list-item text-left">新媒體中心</div>
    <div class="list-item text-right" />
    <div class="list-item text-left">視覺設計中心</div>
    <div class="list-item text-right" />
    <div class="list-item text-left">數據中心</div>
    <div class="list-item text-right">監製</div>
    <div class="list-item text-left">蕭衡倩</div>
    <div class="list-item text-right" />
    <div class="list-item text-left">2020.07.29</div>

    <div class="questionnaire">
      <span>填寫閱讀體驗問卷</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Editors'
}
</script>
<style lang="scss" scoped>
.editors-wrapper {
  padding-top: 10vh;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  .list-item {
    flex: 0 0 50vw;
    max-width: 50vw;
    color: #eeeeee;
    font-family: SourceHanSansTW-Normal;
    font-size: 16px;
    line-height: 1.5;
  }
  .text-right {
    padding-right: 16px;
  }

  .questionnaire {
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
    margin-top: 20.56vh;
    span {
      font-family: SourceHanSansTW-Bold;
      font-size: 18px;
      font-weight: bold;
      line-height: 1.21;
      color: #2a324b;
    }
  }
}
</style>
