<template>
  <div class="header-link-wrapper">
    <a
      class="header-link"
      :class="{active:active===i}"
      v-for="(link,i) in links"
      :href="link.link"
      :key="link.text"
    >{{link.text}}</a>
  </div>
</template>

<script>
import content from '../../data/content'
export default {
  name: 'HeaderLink',
  data() {
    return { links: content.headerLink, active: 3 }
  },
}
</script>
<style lang="scss" scoped>
.header-link-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  .header-link {
    white-space: nowrap;
    display: block;
    opacity: 0.7;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.82;
    text-align: left;
    color: #333333;
    &:hover {
      text-decoration: none;
      color: #000;
    }
    &.active {
      opacity: 1;
      text-decoration: underline;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 374.99px) {
    padding-left: 0;
  }
  @media screen and (min-width: 1025px) {
    .header-link {
      font-size: 24px;
      line-height: 1.52;
    }
  }
}
</style>
