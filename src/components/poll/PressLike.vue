<template>
  <div class="press-like">
    <div class="tag-area-wrapper">
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
  </div>
</template>

<script>
import content from "../../data/content";

export default {
  name: "PressLike",
  data() {
    // const tags = [];

    // for (let i = 0; i < 20; i++) {
    //   tags.push({
    //     id: `like${i}`,
    //     tag: {
    //       content: "",
    //       color: "",
    //     },
    //     title: "",
    //     userlike: 0,
    //     isLiked: false,
    //   });
    // }
    return { tags: [], imgs: content.pressLikeImgs };
  },
  methods: {
    getData() {
      fetch("https://newmedia.udn.com.tw/active/api/message/?flag=Course108")
        .then((response) => response.json())
        .then((result) => {
          for (let i = 0; i < result.length; i++) {
            this.tags.push(result[i]);
            // this.tags[i].title = result[i].title.replace(
            //   /(?:\\[rn]|[\r\n]+)+/g,
            //   "<br>"
            // );
            // this.tags[i].id = result[i].id;
            // this.tags[i].userlike = result[i].userlike;
            // this.tags[i].tag.content = result[i].tag.content;
            // this.tags[i].tag.color = result[i].tag.color;
          }
          for (let i = 0; i < this.tags.length; i++) {
            this.tags[i].title = this.tags[i].title.replace(
              /(?:\\[rn]|[\r\n]+)+/g,
              "<br>"
            );
          }
        });
    },
    sendLike(tag, i) {
      // const data = {
      //   id: tag.id,
      //   userlike: true,
      //   flag: 'Course108',
      // }
      const dataString = `id=${tag.id}&userlike=${true}&flag=Course108`;
      const url = "https://newmedia.udn.com.tw/active/api/message/";

      if (!tag.isLiked) {
        this.tags[i].isLiked = true;
        this.tags[i].userlike += 1;
        // ajax
        if (!this.tags[i].isPressed) {
          // var http = new XMLHttpRequest()
          // http.open('POST', url)
          // http.setRequestHeader(
          //   'Content-type',
          //   'application/x-www-form-urlencoded',
          // )
          // http.onreadystatechange = function() {}
          // http.send(dataString)
          fetch(url, {
            method: "POST",
            body: dataString,
            headers: new Headers({
              "Content-Type": "application/x-www-form-urlencoded",
            }),
          });
          // .then(result => result.json())
          // .then(result => console.log(result))
        }
        this.tags[i].isPressed = true;
      } else {
        this.tags[i].isLiked = false;
        this.tags[i].userlike -= 1;
      }

      // const data = {
      //   id: "5ee9c3c7",
      //   userlike: true,
      //   flag: 'Course108',
      //  }
      // const dataString = `id=${data.id}&userlike=${true}&flag=Course108`
      // const url = 'https://newmedia.udn.com.tw/active/api/message/'

      // var requestJSON = new XMLHttpRequest()
      // requestJSON.open('POST', url, true)
      // requestJSON.setRequestHeader('Content-type', 'application/json')
      // requestJSON.onreadystatechange = function() {
      //             //Call a function when the state changes.
      //             if (requestJSON.readyState == 4 && requestJSON.status == 200) {
      //               console.log(requestJSON.responseText)
      //             }
      //           }
      // requestJSON.send(data)

      // var requestXWWW = new XMLHttpRequest()
      // requestXWWW.open('POST', url, true)
      // requestXWWW.setRequestHeader('Content-type', 'x-www-form-urlencoded')
      // requestXWWW.onreadystatechange = function() {
      //             //Call a function when the state changes.
      //             if (requestXWWW.readyState == 4 && requestXWWW.status == 200) {
      //               console.log(requestXWWW.responseText)
      //             }
      //           }
      // requestXWWW.send(dataString)
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style lang="scss" scoped>
.press-like {
  padding: 79px 0;
  background-color: #f5f5f5;
  @media screen and (max-width: 1024.99px) {
    padding: 72px 0;
  }
  @media screen and (max-width: 767.99px) {
    padding: 29px 0;
  }
  // orphans: 1;
  // widows: 1;
  // height: 150vh; //
  .tag-area-wrapper {
    margin: auto;
    width: 1080px;
    column-count: 3;
    column-gap: 15px;
    @media screen and (max-width: 1024.99px) {
      width: 715px;
      column-count: 2;
    }
    @media screen and (max-width: 767.99px) {
      width: 350px;
      column-count: 1;
    }
    @media screen and (max-width: 350px) {
      width: 291px;
    }
    .tag-area {
      margin-bottom: 15px;
      padding: 20px;
      background-color: #fff;
      text-align: left;
      display: inline-block;
      // width: 100%;
      width: 350px;
      @media screen and (max-width: 350px) {
        width: 291px;
      }
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
}
</style>
