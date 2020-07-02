import Vue from "vue";

import { rwdMethods } from "@/mixins/masterBuilder.js";
import "bootstrap/scss/bootstrap.scss";
import "@/assets/style/reset.scss";
import "@/assets/style/main.scss";
import "@/assets/style/font.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBlind,
  faUserInjured,
  faUserGraduate,
  faPeopleCarry,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueYoutube from "vue-youtube";

import App from "./App.vue";
// import router from "./router";
import store from "./store";

Vue.use(VueYoutube);

library.add(
  faBlind,
  faUserInjured,
  faUserGraduate,
  faPeopleCarry,
  faAngleDoubleDown
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  // router,
  store,
  render: (h) => h(App),
  mixins: [rwdMethods],
}).$mount("#app");
