<template>
  <figure class="full-wide-image">
    <img
      :src="selectSrc_3(srcMob, srcPad, srcPc)"
      :alt="alt"
    >
    <figcaption v-if="useDescription" class="full-wide-image__description article">
      <p class="small">
        <slot />
      </p>
    </figcaption>
  </figure>
</template>


<script>
import { autoResize_3, selectSrcMethod_3 } from '@/mixins/masterBuilder.js';

export default {
  name: 'FullWideImage',
  mixins: [autoResize_3, selectSrcMethod_3],
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
    alt: {
      type: String,
      default: document.querySelector('title').innerHTML,
    },
    useDescription: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.full-wide-image {
  position: relative;
  width: 100%;
  margin: 0;
  img {
    width: 100%;
    height: auto;
  }
  .full-wide-image__description {
    p {
      margin: 0;
      color: #7b7a7a;
    }
  }
}
</style>