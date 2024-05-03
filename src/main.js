import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import VueSmoothScroll from 'vue3-smooth-scroll';
import VueScrollFixedNavbar from "vue-scroll-fixed-navbar";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueMeta from 'vue-meta';
import VueParticles from 'vue-particles'

Vue.use(VueSmoothScroll);
Vue.use(VueScrollFixedNavbar);
Vue.config.productionTip = false;
Vue.use(VueMeta);
Vue.use(VueParticles)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import styles
import "../src/assets/main/css/fonts.css"
import "../src/assets/main/css/style.css";

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");