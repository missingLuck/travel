/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import VueAwesomeSwiper from "vue-awesome-swiper";
import './mock/mock.js';
import "swiper/dist/css/swiper.css";
import "assets/styles/reset.css";
import "assets/styles/border.css";
import "assets/styles/iconfont.css";
import './plugins/element.js'

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
