<template>
  <div class="message-source">
    <div>
      108課綱上路1年，《聯合報》此次針對全台929所國高中、1243位民眾進行民調，929所學校中更有318所學校踴躍寫下真實心聲回傳，調查結果看到民眾和學校對新課綱理念的認同，但也看到他們濃厚的焦慮與不安。
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageSource",
};
</script>
<style lang="scss" scoped>
.message-source {
  background-color: #000;
  color: #eeeeee;
  padding: 88px 21.9% 64px;
  @media screen and (max-width: 1024.99px) {
    padding: 164px 12.5% 72px;
  }
  @media screen and (max-width: 767.99px) {
    padding: 79px 3.9% 60px;
  }

  div {
    font-size: 20px;
    line-height: 1.7;
    text-align: left;
  }
}
</style>
