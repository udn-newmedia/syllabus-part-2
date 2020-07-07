<template>
  <div class="header-link-wrapper">
    <a
      class="header-link"
      :class="[
        { active: active === i },
        `theme-${theme}`,
        { 'not-online': i === 1 && !isAfterOnlineDate },
      ]"
      v-for="(link, i) in links"
      :href="operatedLink(link.link, i)"
      :target="i === active || (i === 1 && !isAfterOnlineDate) ? '' : '_blank'"
      rel="noopener"
      aria-label="outlink"
      name="outlink"
      :key="link.text"
      @click="
        sendGA({
          category: 'menu',
          action: 'click',
          label: link.gaLabel,
        })
      "
    >
      <span class="text">{{ link.text }}</span>
      <span
        class="menu-item__online-date"
        v-if="link.online && !isAfterOnlineDate"
        >{{ link.online }}</span
      >
    </a>
  </div>
</template>

<script>
import content from "../../data/content";
import { sendGaMethods } from "@/mixins/masterBuilder.js";
import isAfterOnlineDate from "@/mixins/handleOnlineDate.js";

export default {
  name: "HeaderLink",
  props: {
    theme: { type: String, default: "light" },
    isNotRoot: { type: Boolean, default: true },
  },
  mixins: [sendGaMethods, isAfterOnlineDate],
  data() {
    return { links: content.headerLink, active: 3 };
  },
  methods: {
    getActive() {
      const currentURL = window.location.href;

      if (currentURL.indexOf("../problem") !== -1) {
        this.active = 0;
      } else if (currentURL.indexOf("/poll") !== -1) {
        this.active = 1;
      } else if (currentURL.indexOf("/data") !== -1) {
        this.active = 2;
      } else if (currentURL.indexOf("/story") !== -1) {
        this.active = 4;
      } else if (currentURL.indexOf("/collect") !== -1) {
        this.active = 5;
      } else {
        this.active = 3;
      }
    },
    operatedLink(link, index) {
      if (index === this.active || (index === 1 && isAfterOnlineDate)) {
        return "javascript:void(0);";
      } else {
        return this.isNotRoot ? `.${link}` : link;
      }
    },
  },
  mounted() {
    this.getActive();
  },
};
</script>
<style lang="scss" scoped>
@import "~/style/menu_item_disabled.scss";

.header-link-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .header-link {
    display: block;
    opacity: 0.7;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.82;
    text-align: left;
    @media screen and (max-width: 374.99px) {
      font-size: 18px;
    }
    &:hover {
      text-decoration: none;
    }
    &.active {
      opacity: 1;
      font-weight: 500;
      cursor: default;
      .text {
        text-decoration: underline;
      }
    }
    &.not-online {
      cursor: auto;
    }
    // .online {
    //   color: #00ccb1;
    //   font-size: 16px;
    //   @media screen and (max-width: 374.99px) {
    //     font-size: 13px;
    //   }
    // }
  }
  @media screen and (max-width: 374.99px) {
    padding-left: 0;
  }
  @media screen and (min-width: 1025px) {
    .header-link {
      font-size: 24px;
      line-height: 1.52;
    }
  }
  .theme-light {
    color: #333333;
    &:hover {
      color: #000;
    }
  }
  .theme-dark {
    color: #eeeeee;
    &:hover {
      color: #fff;
    }
  }
}
</style>
