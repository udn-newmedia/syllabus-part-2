<template>
  <div class="mob-part7" ref="mobPart7">
    <div class="mob-part7-text mob-part7-quote" :class="{active}">
      <p
        class="mob-part7-quote-text"
      >溝通不足與配套措施不夠，許多教育工作者只能在「忙、茫、盲」中度過。一道道令人眼花撩亂的教改方案中，教育目的不斷地異化變質，孩子們對這些「教改大餐」消化不良。</p>
      <p class="mob-part7-quote-source">
        2003年民間發表《
        <span>教改萬言書</span>》
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobPart7',
  data() {
    return { active: false }
  },
  methods: {
    updateProgress() {
      const containerTop = this.$refs.mobPart7.offsetTop
      const { innerHeight, pageYOffset } = window
      if (pageYOffset > containerTop - 0.5 * innerHeight) {
        this.active = true
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.updateProgress)
  },
  mounted() {
    this.updateProgress()
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateProgress)
  },
}
</script>

<style lang="scss" scoped>
.mob-part7 {
  text-align: left;
  .mob-part7-text {
    padding-top: 72px;
    padding-left: 14.3%;
    padding-right: 7.8%;
    font-family: source-han-serif-tc, serif;
    color: #777777;
    .mob-part7-quote-text {
      font-size: 36px;
      font-weight: 600;
      line-height: 1.67;
      margin-bottom: 20px;
    }
    .mob-part7-quote-source {
      margin-bottom: 100px;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.5;
      span {
        color: #049d88;
        text-decoration: underline;
      }
    }
  }
  .mob-part7-quote {
    transition: all 2s ease-out;
    transform: translateX(100%);
    opacity: 0;
    &.active {
      transform: translateX(0%);
      opacity: 1;
    }
  }
  @media screen and (max-width: 767.99px) {
    .mob-part7-text {
      .mob-part7-quote-text {
        font-size: 30px;
      }
      .mob-part7-quote-source {
        margin-bottom: 120px;
      }
    }
  }
}
</style>