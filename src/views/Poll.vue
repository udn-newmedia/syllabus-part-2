<template>
  <div class="poll">
    <PageIndicator />
    <HeaderTypeC theme="dark" :device="windowSize.width<=576?'mob':'pc'" pageTitle="課綱上路周年大調查">
      <HeaderLink theme="dark" :isRoot="false" />
    </HeaderTypeC>
    <Twinkle :windowSize="windowSize" />
    <!-- <MessageSource /> -->
    <ThreeEvents />
    <ArticleCastAnchor title="完整民調結果" />
    <AllPolls :windowSize="windowSize" />
    <ArticleCastAnchor title="各校提解方" />
    <Schools />
    <PressLike />
    <ArticleCastAnchor title="解焦慮看這" />
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
import PageIndicator from '@/components/layout/PageIndicator'
import HeaderTypeC from '@/components/header/HeaderTypeC'
import ArticleCastAnchor from '@/components/layout/ArticleCastAnchor'
import HeaderLink from '@/components/self/HeaderLink'
import Twinkle from '@/components/poll/Twinkle'
// import MessageSource from '@/components/poll/MessageSource'
import ThreeEvents from '@/components/poll/ThreeEvents'
import PressLike from '@/components/poll/PressLike'
import AllPolls from '@/components/poll/AllPolls'
import Schools from '@/components/poll/Schools'

import Marketing from '@/components/self/Marketing.vue'
import OtherProjects from '@/components/self/OtherProjects'
import Editors from '@/components/self/Editors.vue'
import PageFooter from '@/components/footer/PageFooter.vue'
import FooterFbComment from '@/components/footer/FooterFbComment.vue'
import FooterLogo from '@/components/footer/FooterLogo.vue'
import PageBackTop from '@/components/layout/PageBackTop.vue'

export default {
  name: 'Poll',
  components: {
    PageIndicator,
    HeaderTypeC,
    HeaderLink,
    ArticleCastAnchor,
    Twinkle,
    // MessageSource,
    ThreeEvents,
    PressLike,
    AllPolls,
    Schools,
    Marketing,
    OtherProjects,
    Editors,
    PageFooter,
    FooterFbComment,
    FooterLogo,
    PageBackTop,
  },
  data() {
    return { windowSize: { width: 0 } }
  },
  methods: {
    checkWindowSize() {
      const { innerWidth } = window
      this.windowSize = { width: innerWidth }
    },
  },
  created() {
    window.addEventListener('resize', this.checkWindowSize)
  },
  mounted() {
    this.checkWindowSize()
  },
  destroyed() {
    window.removeEventListener('resize', this.checkWindowSize)
  },
}
</script>
<style lang="scss" scoped>
.header-anchor__list
  .header-anchor__list__item
  .header-anchor__list__item--active
  .header-anchor__list__item--dark {
  border-color: #00ccb1 !important;
}
</style>
