<template>
  <div class="poll">
    <Twinkle />
    <MessageSource />
    <ThreeEvents />
    <PressLike />

    <Marketing />
    <OtherProjects />
    <PageFooter slot="footer">
      <Editors />
      <FooterFbComment />
      <FooterLogo />
      <PageBackTop />
    </PageFooter>
  </div>
</template>

<script>
import Twinkle from "@/components/poll/Twinkle";
import MessageSource from "@/components/poll/MessageSource";
import ThreeEvents from "@/components/poll/ThreeEvents";
import PressLike from "@/components/poll/PressLike";

import Marketing from "@/components/self/Marketing.vue";
import OtherProjects from "@/components/self/OtherProjects";
import Editors from "@/components/self/Editors.vue";
import PageFooter from "@/components/footer/PageFooter.vue";
import FooterFbComment from "@/components/footer/FooterFbComment.vue";
import FooterLogo from "@/components/footer/FooterLogo.vue";
import PageBackTop from "@/components/layout/PageBackTop.vue";

export default {
  name: "Page3",
  components: {
    Twinkle,
    MessageSource,
    ThreeEvents,
    PressLike,

    Marketing,
    OtherProjects,
    Editors,
    PageFooter,
    FooterFbComment,
    FooterLogo,
    PageBackTop,
  },
};
</script>
