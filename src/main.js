import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "./store"; 
import VueScrollTo from 'vue-scrollto';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import { createHead } from '@vueuse/head';  // Import the createHead function
import VueParticles from 'vue-particles';
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";  // Ensure the CSS is imported

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import "../src/assets/main/css/fonts.css";
import "../src/assets/main/css/style.css";

const app = createApp(App);
const head = createHead();  // Create a head instance

createStore();  // Call createStore

app.use(router);
app.use(VueScrollTo);
app.use(head);  // Use the head instance here
app.use(VueParticles);
app.use(Antd);  // Use Ant Design Vue here
app.use(BootstrapVue3);

app.mount('#app');