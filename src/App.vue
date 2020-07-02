<template>
  <div id="app">
    <PageIndicator />
    <HeaderTypeA slot="header">
      <HeaderLink />
    </HeaderTypeA>
    <!-- <Header /> -->
    <Timeline />
    <!-- <router-view /> -->
    <Marketing />
    <OtherProjects />

    <PageFooter slot="footer">
      <Editors />

      <!-- <FooterShare /> -->
      <FooterFbComment />
      <FooterLogo />
      <PageBackTop />
    </PageFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import PageIndicator from "@/components/layout/PageIndicator";
import Marketing from "@/components/self/Marketing.vue";
import HeaderTypeA from "@/components/header/HeaderTypeA";
import HeaderLink from "@/components/self/HeaderLink";
import Timeline from "@/views/Timeline";
import OtherProjects from "@/components/self/OtherProjects";
import Editors from "@/components/self/Editors.vue";

import PageFooter from "@/components/footer/PageFooter.vue";

import { autoResize_3, sendGaMethods } from "@/mixins/masterBuilder.js";
import { fbBrowserResize } from "@/mixins/fbBrowserResize.js";
// import FooterShare from '@/components/footer/FooterShare.vue'
import FooterFbComment from "@/components/footer/FooterFbComment.vue";
import FooterLogo from "@/components/footer/FooterLogo.vue";
import PageBackTop from "@/components/layout/PageBackTop.vue";

export default {
  name: "App",
  mixins: [autoResize_3, sendGaMethods, fbBrowserResize],
  components: {
    PageIndicator,
    HeaderTypeA,
    HeaderLink,
    Timeline,
    Marketing,
    OtherProjects,
    Editors,
    PageFooter,
    //
    // FooterShare,
    FooterFbComment,
    FooterLogo,
    PageBackTop,
  },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// hide the scroll bar
::-webkit-scrollbar {
  display: none;
}
// temporary
.icon-theme-light {
  color: #ababab !important;
}
</style>
