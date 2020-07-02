import Vue from 'vue'
import App from './App.vue'
import { rwdMethods } from '@/mixins/masterBuilder.js';
import '~/style/main.scss';
import '~/style/font.scss';
import 'intersection-observer';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mixins: [rwdMethods]
}).$mount('#app')

window.onload = () => {
  document.getElementsByTagName('iframe')[0].style.top = 0;
};