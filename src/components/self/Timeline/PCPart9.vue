<template>
  <div class="d-flex">
    <div class="part9-text">
      <div class="part9-graph-wrapper">
        <div class="part9-graph">
          <h2 class="part9-title">下一波教改：十二年國教、試入學</h2>
          <ul class="part9-nextlist">
            <li>
              <span>2011年：</span>前總統馬英九宣布啟動十二年國民基本教育
            </li>
            <li>
              <span>2014年：</span>國中教育會考上路，國中升學分為「免試入學」和「特色招生」
            </li>
          </ul>
        </div>
      </div>
      <div class="part9-today-wrapper">
        <div class="part9-today">
          <div class="part9-today-title">
            <span>2020年的今天</span>
          </div>
          <ul class="part9-today-list">
            <li>
              <div class="part9-today-list-subtitle">「免試」不是真免試：</div>
              <div>報名人數若超過學校招生名額，將進行「超額比序」，項目包括會考成績、志願序、多元學習表現。</div>
            </li>
            <li>
              <div class="part9-today-list-subtitle">明星高中搶破頭：</div>
              <div>「有些縣市已幾乎全面免試；但部分縣市明星高中光環仍在，升學壓力沒減輕。</div>
            </li>
            <li>
              <div class="part9-today-list-subtitle">私校風氣更盛：</div>
              <div>
                升學方式複雜，家長圖直升，就讀私立國中的學生大增。教育部統計，2014年就讀私立國中的學生比例僅
                <span>11.74％</span>，2019年增加到
                <span>13.9％</span>。
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="part9-image-wrapper">
      <div class="part9-image">
        <img class="img-fluid" :src="img" alt />
        <div>圖為首屆國中會考後，十二年國教家長聯盟在教育部外抗議，要求教育部對會考填志願制度提出補救措施。圖／報系資料照</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PCPart9',
  props: { active: { type: Boolean, default: false }, img: { type: String } },
}
</script>
<style lang="scss" scoped>
.part9-text {
  display: flex;
  width: 92.97vw;
  height: 100vh;
  margin-right: 70px;
  .part9-graph-wrapper {
    position: relative;
    height: 100%;
    width: 50%;
    .part9-graph {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      top: 27.22%;
      left: 0;
      .part9-title {
        font-size: 40px;
        font-weight: bold;
        line-height: 1.56;
        text-align: left;
        color: #000000;
        font-family: SourceHanSansTW-Bold;
        padding-right: 8vw;
      }
      .part9-nextlist {
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
            content: '';
            position: absolute;
            width: 12px;
            height: 12px;
            top: 9px;
            left: 0;
            background-color: #000000;
            border-radius: 50%;
          }
          span {
            font-family: SourceHanSansTW-Bold;
          }
        }
      }
    }
  }
  .part9-today-wrapper {
    position: relative;
    height: 100%;
    width: 50%;
    .part9-today {
      position: absolute;
      top: 27.5%;
      // padding: 0 10% 0 10%;
      .part9-today-title {
        display: flex;
        // justify-content: flex-start;
        align-items: center;
        // height: 57px;
        font-family: SourceHanSansTW-Bold;
        span {
          display: inline-block;
          white-space: nowrap;
          color: #ffffff;
          padding: 0 5%;
          background-color: #00ccb1;
          font-size: 40px;
          font-weight: bold;
          line-height: 1.56;
          text-align: center;
        }
      }
      .part9-today-list {
        list-style-type: none;
        font-size: 20px;
        line-height: 1.7;
        text-align: left;
        color: #000000;
        li {
          margin: 12px 0 8px;
          .part9-today-list-subtitle {
            color: #049d88;
          }
          span {
            color: #eb0f43;
          }
        }
      }
    }
  }
}

.part9-image-wrapper {
  width: 60.7vw;
  .part9-image {
    position: absolute;
    top: 12.2vh;
    img {
      max-width: 100%;
      max-height: 100%;
    }
    div {
      width: 60.7vw;
      font-size: 15px;
      line-height: 1.4;
      text-align: left;
      color: #929292;
    }
  }
}
</style>
