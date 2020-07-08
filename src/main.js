import Vue from "vue";
import "babel-polyfill";

import { rwdMethods } from "@/mixins/masterBuilder.js";
import "bootstrap/scss/bootstrap.scss";
import "@/assets/style/reset.scss";
import "@/assets/style/main.scss";
import "@/assets/style/font.scss";

import VueYoutube from "vue-youtube";
import App from "./App.vue";
import store from "./store";

import "intersection-observer";
// import "whatwg-fetch";
// import objectFitPolyfill from "objectFitPolyfill";

Vue.config.productionTip = false;
Vue.use(VueYoutube);
// Vue.use(objectFitPolyfill);

new Vue({
  store,
  render: (h) => h(App),
  mixins: [rwdMethods],
}).$mount("#app");
