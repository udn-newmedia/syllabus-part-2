<template>
  <div class="page1">
    <TimelinePC v-if="windowSize.width >=1025" />
    <TimelineMob :windowSize="windowSize" v-else />
    <Video />
  </div>
</template>

<script>
import TimelinePC from '../components/self/Timeline/TimelinePC.vue'
import TimelineMob from '../components/self/Timeline/TimelineMob.vue'
import Video from '../components/self/Video'

export default {
  name: 'Page1',
  components: {
    TimelinePC,
    TimelineMob,
    Video,
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
