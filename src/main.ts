import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { ElButton } from "element3";
import 'element3/lib/theme-chalk/button.css';

createApp(App)
    .use(router)
    .use(ElButton)
    .mount("#app");
