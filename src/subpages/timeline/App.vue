<template>
  <div id="app">
    <HeaderTypeA slot="header" />
    <!-- <Header /> -->
    <router-view />
    <Marketing />
    <OtherProjects />
    <Editors />
    <PageFooter slot="footer" />
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/self/Header.vue'
import Marketing from '@/components/self/Marketing.vue'
import HeaderTypeA from '@/components/header/HeaderTypeA'
import OtherProjects from '@/components/self/OtherProjects'
import Editors from '@/components/self/Editors.vue'

import FooterEditor from '@/components/footer/FooterEditor.vue'
import PageFooter from '@/components/footer/PageFooter.vue'

export default {
  name: 'App',
  components: {
    // Header,
    HeaderTypeA,
    Marketing,
    OtherProjects,
    Editors,
    PageFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// hide the scroll bar
// ::-webkit-scrollbar {
//   display: none;
// }
// temporary
.icon-theme-light {
  color: #ababab !important;
}
</style>
