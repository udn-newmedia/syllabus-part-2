<template lang="pug">
  article.wide-image-container
    figure.wide-image(:class="{ 'wide-image--shrink': shrink }")
      img(
        :src="selectSrc_3(srcMob, srcPad, srcPc)"
        :alt="alt"
      )
    figcaption.wide-image__description.article
      p
        slot
</template>


<script>
import { autoResize_3, selectSrcMethod_3 } from '@/mixins/masterBuilder.js';

export default {
  name: 'WideImage',
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
    shrink: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss" scoped>
.wide-image-container {
  width: 100%;
}
.wide-image {
  position: relative;
  width: 100%;
  margin: 0;
  @include pad {
    width: 680px;
    margin: 0 auto;
  }
  @include pc {
    width: 820px;
    margin: 0 auto;
  }
  img {
    width: 100%;
    height: auto;
  }
}
.wide-image__description {
  margin-top: 8px;
  p {
    color: #7b7a7a;
    margin: 0;
  }
  &.article {
    padding-top: 8px;
  }
}

.wide-image--shrink {
  @media screen and (max-width: 767.98px) {
    position: relative;
    width: 100%;
    margin: auto;
    padding: 24px 16px 0 16px;
  }
}
</style>