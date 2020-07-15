import Vue from "vue";
import store from "../../store/index";
import "babel-polyfill";
import "isomorphic-fetch";

import "bootstrap/scss/bootstrap.scss";
import "@/assets/style/reset.scss";
import "@/assets/style/main.scss";
import "@/assets/style/font.scss";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";

// library.add(faAngleDoubleDown);
// Vue.component("font-awesome-icon", FontAwesomeIcon);
Window.Promise = Promise;

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
