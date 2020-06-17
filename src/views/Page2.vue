<template>
  <div class="about">
    <h1>Page2</h1>
    <!-- <VictimsList /> -->
    <TheirVoice />
    <ProgressBar />
  </div>
</template>

<script>
import ProgressBar from '@/components/self/ProgressBar'
// import VictimsList from '@/components/self/VictimsList'
import TheirVoice from '@/components/self/TheirVoice'

export default {
  name: 'Page2',
  components: {
    TheirVoice,
    ProgressBar
  }
}
</script>
