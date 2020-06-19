<template lang="pug">
  section.the-cover
    div.main-words
      p.white.typing ２０１９年，高三，我做了一個決定：
      div.show-second
        h1.white(v-if="deviceType === 'pc'") 不上大學
        span(v-else)
          h1.white 不上
          h1.white.right 大學
        p.white.right by 小雅（化名）
    div.arrow-container(@click="handleScroll")
      NmdArrow
    div#enter-anchor
</template>

<script>
import NmdArrow from '@/components/pinhead/NmdArrow.vue';
import { autoResize_3, sendGaMethods } from '@/mixins/masterBuilder.js';
import vueScrollTo from 'vue-scrollto';

export default {
  name: 'TheCover',
  mixins: [autoResize_3, sendGaMethods],
  components: {
    NmdArrow
  },
  methods: {
    handleScroll() {
      vueScrollTo.scrollTo('#enter-anchor');
      this.sendGA(this.formatGA('CoverArrow'));
    }
  },
  mounted() {
    
  },
}
</script>

<style lang="scss" scoped>
.the-cover {
  width: 100%;
  height: 100vh;
  padding: 64px 0;
  background-color: #181818;
  @include pc {
    padding: 10% 0;
  }
  .main-words {
    padding: 16px;
    @include pad {
      padding: 32px;
    }
    @include pc {
      padding: 64px 64px;
    }
    p {
      margin-top: 8px;
      @include smob {
        font-size: 1rem;
      }
    }
    h1 {
      font-size: 40vw;
      line-height: 1.1;
      @include pc {
        font-size: 22vw;
        text-align:justify;
        text-justify: distribute-all-lines;
        text-align-last:justify;
      }
    }
    .right {
      text-align: right;
    }
  }
  .typing {
    width: 19.125rem; // 1.125rem * 17
    @include smob {
      width: 17rem;
    }
    @include pc {
      width: 21.25rem; // 1.25rem * 17
    }
    opacity: 0;
    white-space: nowrap;
    display: inline-block;
    overflow:hidden;
    border-right: .05em solid;
    animation: typing 1.5s 1s steps(17), caret 1s steps(1) infinite, fade-in 0s 1s forwards;
    @keyframes typing {
      from { width: 0; }
    }
    @keyframes caret {
      50% { border-color: transparent; }
    }
  }
  .show-second {
    opacity: 0;
    animation: fade-in 0s 3.333s forwards;
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .arrow-container {
    margin: 32px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
#enter-anchor {
  position: absolute;
  bottom: 0;
}
</style>
