<template>
  <div class="press-like">
    <div class="tag-area" v-for="(tag, i) in tags" :key="tag.id">
      <span class="tag" :style="{ backgroundColor: tag.tag.color }">{{
        tag.tag.content
      }}</span>
      <!-- <p>{{ tag.title }}</p> -->
      <p v-html="tag.title" />
      <div class="like">
        <span class="likeNumber">{{ tag.userlike }}</span>
        <img
          @click="sendLike(tag, i)"
          :src="tag.isLiked ? imgs.like : imgs.unlike"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import content from "../../data/content";
import axios from "axios";

export default {
  name: "PressLike",
  data() {
    const tags = [];

    for (let i = 0; i < 20; i++) {
      tags.push({
        id: `like${i}`,
        tag: {
          content: "",
          color: "",
        },
        title: "",
        userlike: 0,
        isLiked: false,
      });
    }
    return { tags, imgs: content.pressLikeImgs };
  },
  methods: {
    getData() {
      fetch("https://newmedia.udn.com.tw/active/api/message/?flag=Course108")
        .then((response) => response.json())
        .then((result) => {
          for (let i = 0; i < 20; i++) {
            this.tags[i].title = result[i].title.replace(
              /(?:\\[rn]|[\r\n]+)+/g,
              "<br>"
            );
            // .replace(/(?:\\[rn]|[\r\n]+)+/g,'<br>')
            this.tags[i].id = result[i].id;
            this.tags[i].userlike = result[i].userlike;
            this.tags[i].tag.content = result[i].tag.content;
            this.tags[i].tag.color = result[i].tag.color;
          }
        });
    },
    sendLike(tag, i) {
      if (!tag.isLiked) {
        this.tags[i].isLiked = true;
        this.tags[i].userlike += 1;
      } else {
        this.tags[i].isLiked = false;
        this.tags[i].userlike -= 1;
      }

      const data = {
        id: tag.id,
        userlike: true,
        flag: "Course108",
      };
      axios
        .post("https://newmedia.udn.com.tw/active/api/message/", data)
        .then((response) => response.json())
        .then((result) => {
          console.log(result, i);
        });

      // const data = {
      //   id: tag.id,
      //   userlike: true,
      //   flag: 'Course108',
      // }
      // fetch('https://newmedia.udn.com.tw/active/api/message/', {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      //   headers: new Headers({
      //     'Content-Type': 'application/json',
      //     'Allow-Control-Allow-Origin': '*',
      //   }),
      // })
      //   .then(response => response.json())
      //   .then(result => {
      //     console.log(result, i)
      //   })

      // axios
      //   .get("https://newmedia.udn.com.tw/active/api/message/?flag=Course108")
      //   .then((response) => response.json())
      //   .then((result) => {
      //     console.log(result);
      //   })
      //   .catch(function(error) {
      //     // 请求失败处理
      //     console.log(error);
      //   });
      // // const data = {
      // //   id: tag.id,
      // //   userlike: true,
      // //   flag: "Course108",
      // // };
      // // //https://newmedia.udn.com.tw/active/api/message/
      // // fetch("/data/active/api/message/", {
      // //   method: "POST",
      // //   body: JSON.stringify(data),
      // //   headers: new Headers({
      // //     "Content-Type": "application/json",
      // //     "Allow-Control-Allow-Origin": "*",
      // //   }),
      // // })
      // //   .then((response) => response.json())
      // //   .then((result) => {
      // //     console.log(result);
      // //   });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style lang="scss" scoped>
.press-like {
  padding: 79px 85px;
  background-color: #f5f5f5;
  column-count: 3;
  @media screen and (max-width: 1024.99px) {
    padding: 72px 47px;
    column-count: 2;
  }
  @media screen and (max-width: 767.99px) {
    padding: 29px 16px;
    column-count: 1;
  }
  column-gap: 15px;
  // orphans: 1;
  // widows: 1;
  // height: 150vh; //
  .tag-area {
    margin-bottom: 15px;
    padding: 20px;
    background-color: #fff;
    text-align: left;
    display: inline-block;
    width: 100%;

    // min-width: 0;
    // word-wrap: break-word;
    .tag {
      font-size: 15px;
      line-height: 2.04;
      color: #ffffff;
      padding: 2px 5px;
    }
    & > p {
      font-size: 18px;
      line-height: 1.7;
      color: #131313;
    }
    .like {
      display: flex;
      justify-content: flex-end;
      .likeNumber {
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        color: #131313;
        padding-right: 9.3px;
        padding-top: 5px;
        line-height: 1.7;
      }
    }
  }
}
</style>
