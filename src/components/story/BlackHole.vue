<template lang="pug">
  div#body-movin-black-hole.body-movin-container
</template>

<script>
import * as bodymovin from "lottie-web";
import { autoResize_3 } from '@/mixins/masterBuilder.js';

export default {
  name: 'BlackHole',
  mixins: [autoResize_3],
  mounted() {
    this.bm = bodymovin.loadAnimation({
      container: document.getElementById('body-movin-black-hole'),
      renderer: "svg",
      loop: this.loop,
      autoplay: true,
      path: `./story/blackhole/${this.deviceType}/data.json`,
      name: this.name
    });
  }
}
</script>

<style lang="scss" scoped>
.body-movin-container {
  width: 100%;
  height: 100%;
}
</style>