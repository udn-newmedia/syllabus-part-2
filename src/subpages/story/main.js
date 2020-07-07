import Vue from 'vue'
import App from './App.vue'
import { rwdMethods } from '@/mixins/masterBuilder.js';
import '~/style/main.scss';
import '~/style/font.scss';
import 'intersection-observer';
import objectFitPolyfill from 'objectFitPolyfill';

Vue.config.productionTip = false
Vue.use(objectFitPolyfill)

new Vue({
  render: h => h(App),
  mixins: [rwdMethods]
}).$mount('#app')

window.onload = () => {
  document.getElementsByTagName('iframe')[0].style.top = 0;
};