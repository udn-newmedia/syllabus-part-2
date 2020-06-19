<template lang="pug">
  article.title-marguee
    h1#title-marguee-1.title-marguee__text(
      :style="{ transform: transformMarguee1 }"
    ) 升學而升學<span class="big-space" />升學而升學
    h1#title-marguee-2.title-marguee__text(
      :style="{ transform: transformMarguee2 }"
    ) 升學而升學<span class="big-space" />升學而升學
</template>

<script>
export default {
  name: 'TitleMarguee',
  data() {
    return {
      ticking: false,
      translateX: 0
    }
  },
  computed: {
    transformMarguee1() {
      return `translateX(${-this.translateX}%)`;
    },
    transformMarguee2() {
      return `translateX(${this.translateX}%)`;
    },
  },
  methods: {
    handleMarguee() {
      const pos = this.$el.getBoundingClientRect();
      const top = pos.top;
      const bottom = pos.bottom;

      if (top < window.innerHeight && bottom> 0) {
        this.translateX = (1 - top / window.innerHeight) * 50;
      }
    },
    handleScroll() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.handleMarguee();
          this.ticking = false;
        });
      }
      this.ticking = true;
    },
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll, true);
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll, true);
  }
}
</script>

<style lang="scss" scoped>
.title-marguee {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 50vw;
  margin: 72px 0;
  @include pc {
    margin: 156px 0;
  }
  .title-marguee__text {
    font-size: 25vw;
    white-space: nowrap;
    transition: .111s;
    .big-space {
      display: inline-block;
      width: 64px;
      @include pad {
        width: 128px;
      }
      @include pc {
        width: 20vw;
      }
    }
  }
}

h1#title-marguee-1 {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 60%;
  color: #000000;
}

h1#title-marguee-2 {
  position: absolute;
  z-index: 1;
  top: 15vw;
  right: 40%;
  color: #eeeeee;
}
</style>