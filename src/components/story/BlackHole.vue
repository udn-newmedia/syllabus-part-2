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
      const path = (() => {
        let loc = `${document.querySelector('meta[property="main-page"]').content}story/blackhole/${this.deviceType}/data.json`;
        if (loc.indexOf('https:') >= 0) return loc.replace('https:', location.protocol);
        return loc.replace('http:', location.protocol);
      })();

      this.bm = bodymovin.loadAnimation({
        container: document.getElementById('body-movin-black-hole'),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path,
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
  margin-top: 64px;
  @include pad {
    margin-top: 192px;
  }
  @include pc {
    margin-top: 192px;
  }
}
.body-movin-container {
  width: 100%;
  height: 100%;
}
</style>