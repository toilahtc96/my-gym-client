import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSmoothScroll from 'vue3-smooth-scroll';
import VueScrollFixedNavbar from "vue-scroll-fixed-navbar";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueMeta from 'vue-meta';
import VueParticles from 'vue-particles';
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";  // Ensure the CSS is imported

Vue.use(VueSmoothScroll);
Vue.use(VueScrollFixedNavbar);
Vue.config.productionTip = false;
Vue.use(VueMeta);
Vue.use(VueParticles);
Vue.use(Antd);  // Use Ant Design Vue here
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "../src/assets/main/css/fonts.css";
import "../src/assets/main/css/style.css";

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
