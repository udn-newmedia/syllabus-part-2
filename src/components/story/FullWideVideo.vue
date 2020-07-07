<template>
  <figure class="full-wide-video">
    <video
      id="ending-video"
      :poster="selectSrc_3(posterMob, posterPad, posterPc)"
      muted
      playsinline
      webkit-playsinline
    >
      <source :src="selectSrc_3(srcMob, srcPad, srcPc)" type="video/mp4" />
      <p>Your browser doesn't support HTML5 video.</p>
    </video>
  </figure>
</template>

<script>
import { autoResize_3, selectSrcMethod_3 } from '@/mixins/masterBuilder.js';
import { observableEvent } from '@/mixins/observableEvent.js';

export default {
  name: 'FullWideVideo',
  mixins: [autoResize_3, selectSrcMethod_3, observableEvent],
  props: {
    srcMob: {
      type: String,
    },
    srcPad: {
      type: String,
    },
    srcPc: {
      type: String,
    },
    posterMob: {
      type: String,
    },
    posterPad: {
      type: String,
    },
    posterPc: {
      type: String,
    },
  },
  data() {
    return {
      observableActive: false
    }
  },
  watch: {
    observableActive: {
      handler(value) {
        if (!value) return;
        const endingVideo = document.getElementById('ending-video');
        endingVideo.play(); 
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.full-wide-video {
  position: relative;
  width: 100%;
  height: 550px;
  margin: 0;
  @include pad {
    height: 100vh;
  }
  @include pc {
    height: 100vh;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .full-wide-video__description {
    margin-top: 8px;
    p {
      color: #7b7a7a;
      margin: 0;
    }
  }
}
</style>