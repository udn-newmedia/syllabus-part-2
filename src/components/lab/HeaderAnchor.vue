<template>
  <div id="header-anchor" class="header-anchor">
    <li id="header-anchor-list" class="header-anchor__list">
      <ul
        :class="{
          'header-anchor__list__item': true,
          'header-anchor__list__item--active': item.active,
          'header-anchor__list__item--dark': theme === 'dark',
          'header-anchor__list__item--light': theme === 'light',
        }"
        v-for="(item, index) in anchorList"
        :key="index"
        :id="'header-anchor-' + item.title"
        @click="handleScrollVert(item.title)"
      >
        <p
          :class="{
            'small': true,
            'white': theme === 'dark',
          }"
        >
          {{item.title}}
        </p>
      </ul>
    </li>
  </div>
</template>

<script>
import { autoResize_2, sendGaMethods } from '@/mixins/masterBuilder.js';
import { scroller } from 'vue-scrollto/src/scrollTo';
const ScrollToVert = scroller();
const ScrollToHorz = scroller();

export default {
  name: 'HeaderAnchor',
  mixins: [autoResize_2, sendGaMethods],
  props: {
    theme: {
      type: String,
    },
  },
  data() {
    return {
      scrollToVertOption: {
        container: 'body',
        duration: 800,
        x: false,
        y: true
      },
      scrollToHorzOption: {
        el: '#header-anchor-list',
        container: '#header-anchor',
        duration: 666,
        x: true,
        y: false
      },
      onScollingFlag: false,
    }
  },
  methods: {
    handleScrollVert(index) {
      this.onScollingFlag = false;
      ScrollToVert('#anchor-' + index, this.scrollToVertOption);
    },
    handleScrollHorz(index) {
      this.onScollingFlag = true;
      ScrollToHorz('#header-anchor-' + index, this.scrollToHorzOption);

      setTimeout(() => {
        this.onScollingFlag = false;
      }, 666);
    }
  },
  computed: {
    anchorList() {
      const list = this.$store.state.anchorList;
      if (this.isMob) {
        if (!this.onScollingFlag) {
          list.forEach((e) => {
            if (e.active) {
              this.handleScrollHorz(e.title);
            }
          });
        }
      }
      
      return list;
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';
.header-anchor {
  position: relative;
  overflow-x: auto;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
li, ul {
  list-style: none;
}
.header-anchor__list {
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: 100%;
  .header-anchor__list__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    height: 100%;
    margin-right: 20px;
    border-bottom: solid 2px #cf060600;
    transition: .333s ease-in-out;
    cursor: pointer;

    @include clean-tap;

    &.header-anchor__list__item--active {
      // font-weight: bold;
      border-bottom: solid 2px;
      &.header-anchor__list__item--dark {
        border-color: #cf0606
      }
      &.header-anchor__list__item--light {
        border-color: #121212
      }
    }
  }
}
</style>