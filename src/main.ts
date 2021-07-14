import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Elment3 from "element3";

createApp(App)
    .use(router)
    .use(Elment3)
    .mount("#app");
