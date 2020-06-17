<template>
  <div class="page1">
    <TimelinePC v-if="innerWidth>768" />
    <Video />
  </div>
</template>

<script>
import TimelinePC from '../components/self/Timeline/TimelinePC.vue'
import Video from '../components/self/Video'

export default {
  name: 'Page1',
  components: {
    TimelinePC,
    Video
  },
  data() {
    const { innerWidth } = window
    return { innerWidth }
  }
}
</script>
