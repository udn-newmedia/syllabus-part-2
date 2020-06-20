<template>
  <div class="otherprojects-wrapper">
    <div class="otherprojects-title">108課綱上路周年追蹤報導</div>

    <div class="otherprojects-container" ref="otherprojectsContainer">
      <a
        v-for="(item,i) in dataArray"
        :href="item.link"
        class="otherprojects-image-wrapper text-decoration-none"
        :class="{'hovered':hovered===i}"
        :style="{opacity:i===3&&0.4}"
        @mouseenter="hoverItem(i)"
        @mouseleave="unHoverItem()"
        :key="item.id"
      >
        <div class="otherprojects-image">
          <img
            :src="windowSize==='web' ? item.img.web : item.img.mob"
            alt
            class="otherprojects-image"
          />
        </div>
        <div class="otherprojects-subtitle-wrapper">
          <span class="otherprojects-subtitle">{{item.title}}</span>
        </div>
      </a>
    </div>

    <ul class="otherprojects-pagination">
      <li
        class="otherprojects-pagination-item"
        v-for="(item,i) in dataArray"
        :class="{'active':activePage===i}"
        :key="`pagination${item.id}`"
      />
    </ul>

    <a href="/" class="otherprojects-link">更多課綱相關報導</a>
  </div>
</template>

<script>
import content from '../../data/content'

export default {
  name: 'OtherProjects',
  data() {
    return {
      dataArray: content.otherProjects,
      windowSize: 'web',
      active: 3,
      hovered: null,
      activePage: 0,
    }
  },
  methods: {
    checkWindowSize() {
      if (window.innerWidth < 768) {
        this.windowSize = 'mob'
      } else {
        this.windowSize = 'web'
      }
    },
    hoverItem(i) {
      if (this.windowSize === 'web' && i !== 3) {
        this.hovered = i
      }
    },
    unHoverItem() {
      this.hovered = null
    },
    containerScrollHandler() {
      if (this.windowSize === 'mob') {
        const { scrollLeft, offsetWidth } = this.$refs.otherprojectsContainer

        this.activePage = Math.round(scrollLeft / offsetWidth)
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.checkWindowSize)
    document
      .querySelector('.otherprojects-container')
      .addEventListener('scroll', this.containerScrollHandler)
    this.checkWindowSize()
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkWindowSize)
    document
      .querySelector('.otherprojects-container')
      .removeEventListener('scroll', this.containerScrollHandler)
  },
}
</script>
<style lang="scss" scoped>
.otherprojects-wrapper {
  margin-top: 10%;
  height: 100vh;
  background-color: #000000;
  padding: 0 15%;
  .otherprojects-title {
    font-family: NotoSansCJKtc-Medium;
    font-size: 25px;
    font-weight: 500;
    line-height: 2.56;
    text-align: center;
    color: #eeeeee;
    padding-top: 16.39vh;
  }
  .otherprojects-container {
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 768px) {
      flex-wrap: nowrap;
      overflow-y: scroll;
    }
    .otherprojects-image-wrapper {
      flex: 0 0 33.33%;
      max-width: 33.33%;
      height: 30.14vh;
      margin: 5.56vh 0;
      padding: 0 15px;
      @media screen and (max-width: 768px) {
        flex: 0 0 85%;
        max-width: 85%;
        height: 50vh;
      }
      .otherprojects-image {
        max-width: 100%;
        overflow: hidden;
        img {
          transition: all 0.5s ease-in-out;
          overflow: hidden;
        }
      }
      .otherprojects-subtitle-wrapper {
        display: flex;
        justify-content: flex-start;
        .otherprojects-subtitle {
          font-family: MicrosoftJhengHei;
          font-size: 18px;
          line-height: 1.7;
          justify-self: start;
          color: #eeeeee;
          @media screen and (min-width: 768.1px) {
            position: relative;
            &::after {
              position: absolute;
              content: '';
              width: 0;
              bottom: 0;
              left: 0;
              height: 2px;
              background-color: #00ccb1;
              transition: all 0.5s ease-in-out;
            }
          }
          @media screen and (max-width: 768px) {
            text-align: center;
          }
        }
      }
      &.hovered {
        .otherprojects-image {
          img {
            transform: scale(1.2);
          }
        }
        .otherprojects-subtitle-wrapper {
          .otherprojects-subtitle {
            @media screen and (min-width: 768.1px) {
              &::after {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }

  .otherprojects-pagination {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      .otherprojects-pagination-item {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-left: 3px;
        margin-right: 3px;
        background-color: #ababab;
        &.active {
          background-color: #ffffff;
        }
      }
    }
  }

  .otherprojects-link {
    margin-top: 11.11vh;
    display: block;
    font-family: MicrosoftJhengHei;
    font-size: 18px;
    line-height: 1.7;
    text-align: center;
    color: #00ccb1;
  }
}
</style>
