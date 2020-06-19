<template lang="pug">
  section.black-hole
    BlackLine(pos='blackhole')
    div#body-movin-black-hole.body-movin-container
</template>

<script>
import * as bodymovin from "lottie-web";
import { autoResize_3 } from '@/mixins/masterBuilder.js';
import { observableEvent } from '@/mixins/observableEvent.js';
import BlackLine from '@cs/BlackLine.vue';

export default {
  name: 'BlackHole',
  mixins: [autoResize_3, observableEvent],
  components: {
    BlackLine,
  },
  data() {
    return {
      observableActive: false
    }
  },
  watch: {
    observableActive: {
      handler(value) {
        if (value) {
          this.bm.stop();
          this.bm.play();
        }
      }
    }
  },
  methods: {
    initBM() {
      this.bm = bodymovin.loadAnimation({
        container: document.getElementById('body-movin-black-hole'),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: `./story/blackhole/${this.deviceType}/data.json`,
        name: this.name
      });
    }
  },
  mounted() {
    this.initBM();
  }
}
</script>

<style lang="scss" scoped>
.black-hole {
  margin-top: 48px;
  @include pad {
    margin-top: 96px;
  }
  @include pc {
    margin-top: 120px;
  }
}
.body-movin-container {
  width: 100%;
  height: 100%;
}
</style>