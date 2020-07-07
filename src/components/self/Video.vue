<template>
  <div class="video-wrapper" ref="videoWrapper">
    <h1 class="video-title">他們都是過來人</h1>
    <div class="video">
      <div class="video-area">
        <youtube
          :video-id="videoId"
          :player-vars="playerVars"
          @playing="playing"
          @paused="paused"
          ref="youtube"
        />
      </div>
      <div class="video-menu">
        <div
          class="video-item"
          :class="{ active: active === index }"
          v-for="(item, index) in dataArray"
          @click="changeActive(index)"
          :key="item.id"
        >
          <img :src="item.img" alt />
          <div class="name">{{ item.name }}</div>
          <div class="description">{{ item.description }}</div>
        </div>
      </div>
      <div class="video-swiper">
        <div
          class="video-item"
          :class="{ active: active === index }"
          v-for="(item, index) in dataArray"
          @click="changeActive(index)"
          :key="item.id"
        >
          <img :src="item.img" alt />
          <div class="name">{{ item.name }}</div>
          <div class="description">{{ item.description }}</div>
        </div>
      </div>
      <div class="swiper-pagination-wrapper">
        <div
          class="swiper-pagination"
          v-for="(item, index) in dataArray"
          :class="{ active: active === index }"
          :key="`pagination-${item.id}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import content from "../../data/content";
import { sendGaMethods } from "@/mixins/masterBuilder.js";

export default {
  name: "Video",
  data() {
    return {
      dataArray: content.timelineVideo,
      active: 0,
      videoId: "",
      trigger: null,
      playerVars: {
        autoplay: 1,
        mute: 1,
        playsinline: 1,
      },
    };
  },
  mixins: [sendGaMethods],
  methods: {
    playVideo() {
      this.startSendingVideoGA(this.player.playVideo);
    },
    pauseVideo() {
      this.stopSendingVideoGA(this.player.pauseVideo);
    },
    changeActive(index) {
      const target = content.timelineVideo[index];

      this.videoId = target.videoId;
      this.active = index;

      if (!this.playerVars.autoplay) {
        this.playerVars.autoplay = 1;
      }

      this.pauseVideo();
      this.playVideo();

      let name = "";

      switch (index) {
        case 0:
          name = "劉安婷";
          break;
        case 1:
          name = "嚴長壽";
          break;
        case 2:
          name = "管中閔";
          break;

        default:
          name = "藍偉瑩";
          break;
      }

      this.sendGA({
        category: "video",
        action: "click",
        label: name,
      });
    },
    autoplayHandler() {
      const wrapperTop = this.$refs.videoWrapper.offsetTop;
      const wrapperHeight = this.$refs.videoWrapper.offsetHeight;
      const { scrollTop } = document.documentElement;
      const { innerHeight } = window;

      if (
        scrollTop > wrapperTop &&
        scrollTop < wrapperTop + wrapperHeight - 0.5 * innerHeight
      ) {
        this.playVideo();
      } else if (scrollTop < wrapperTop) {
        this.pauseVideo();
      } else {
        this.pauseVideo();
      }
    },
    playing() {
      this.startSendingVideoGA();
    },
    paused() {
      this.stopSendingVideoGA();
    },
    startSendingVideoGA(fn) {
      if (!this.trigger) {
        let name = "";

        switch (this.active) {
          case 0:
            name = "劉安婷";
            break;
          case 1:
            name = "嚴長壽";
            break;
          case 2:
            name = "管中閔";
            break;

          default:
            name = "藍偉瑩";
            break;
        }
        this.sendGA({
          category: "video",
          action: "times",
          label: name,
        });
        this.trigger = setInterval(() => {
          this.player.getPlayerState().then(() => {
            this.sendGA({
              category: "video",
              action: "times",
              label: name,
            });
          });
        }, 10100);
        if (fn) {
          fn();
        }
      }
    },
    stopSendingVideoGA(fn) {
      if (this.trigger) {
        clearInterval(this.trigger);
        this.trigger = null;
        if (fn) {
          fn();
        }
      }
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
  created() {
    window.addEventListener("scroll", this.autoplayHandler);
  },
  mounted() {
    const target = content.timelineVideo[0];
    this.videoId = target.videoId;
    this.active = 0;
    if (!this.playerVars.autoplay) {
      this.playerVars.autoplay = 1;
    }
    this.playerVars.autoplay = 0;
  },
  destroyed() {
    window.removeEventListener("scroll", this.autoplayHandler);
  },
};
</script>

<style lang="scss">
.video-wrapper {
  height: 105.83vh;
  background-color: rgba(0, 0, 0, 1);
  position: relative;
  .video-title {
    position: absolute;
    left: 21.88vw;
    top: 11.11vh;
    font-family: SourceHanSansTW-Bold;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.6;
    text-align: left;
    color: #eeeeee;
  }
  .video {
    position: absolute;
    left: 11.5%;
    top: 22.6%;
    display: flex;
    .video-area {
      width: 62.5vw;
      height: 59.1vh;
      iframe {
        height: 100%;
        width: 100%;
      }
    }
    .video-menu {
      width: 14.3vw;
      height: 59.1vh;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        -webkit-appearance: none;
      }
      &::-webkit-scrollbar:vertical {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #00ccb1;
      }
      .video-item {
        margin-left: 1.17vw;
        margin-right: 1.17vw;
        height: 25.56vh;
        opacity: 0.5;
        &.active {
          opacity: 1;
        }
        img {
          max-width: 100%;
        }
        .name {
          font-family: SourceHanSerifTC-Bold;
          font-size: 18px;
          font-weight: bold;
          line-height: 1.7;
          text-align: left;
          color: #00ccb1;
        }
        .description {
          font-family: MicrosoftJhengHei;
          font-size: 15px;
          line-height: 1.33;
          text-align: left;
          color: #eeeeee;
        }
      }
    }
    .video-swiper {
      display: none;
    }
  }
}
@media screen and (max-width: 760px) {
  ::-webkit-scrollbar {
    display: none;
  }
  .video-wrapper {
    height: 157vh;
    .video-title {
      position: static;
      margin-left: 20vw;
      padding-top: 9.78vh;
    }
    .video {
      position: static;
      flex-direction: column;
      .video-area {
        width: 100vw;
        height: 69.57vh;
      }
      .video-menu {
        display: none;
      }
      .video-swiper {
        width: 100vw;
        display: flex;
        overflow-x: scroll;
        .video-item {
          margin-left: 2.6vw;
          margin-right: 2.6vw;
          flex: 0 0 28.65vw;
          height: 33.15vh;
          opacity: 0.5;
          &.active {
            opacity: 1;
          }
          img {
            max-width: 100%;
          }
          .name {
            font-family: SourceHanSerifTC-Bold;
            font-weight: 600;
            line-height: 1.53;
            text-align: left;
            color: #00ccb1;
          }
          .description {
            font-family: MicrosoftJhengHei;
            line-height: 1.7;
            text-align: left;
            color: #eeeeee;
          }
        }
      }
      .swiper-pagination-wrapper {
        flex: 0 0 100vw;
        display: flex;
        justify-content: center;
        .swiper-pagination {
          width: 8px;
          height: 8px;
          background-color: #ababab;
          margin: 0 3px;
          border-radius: 50%;
          &.active {
            background-color: #ffffff;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 520px) {
  .video-wrapper {
    .video-title {
      margin-left: 5vw;
      font-size: 30px;
    }
    .video {
      .video-swiper {
        .video-item {
          flex: 0 0 43.48vw;
          height: 40vh;
        }
      }
    }
  }
}
</style>
