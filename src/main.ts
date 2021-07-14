import "./styles";
import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import {
        ElButton,
        ElTableColumn,
        ElTable,
        ElIcon,
        ElRadioGroup,
        ElRadio,
        ElRadioButton,
        ElSelect,
        ElOption,
        ElTabs,
        ElTabPane,
        ElDivider,
        ElCard,
        ElInputNumber,
        ElSwitch,
        ElForm,
        ElFormItem, ElLoading, ElCollapse, ElCollapseItem
} from "element-plus";

createApp(App)
    .use(router)
    .use(ElButton)
    .use(ElTable)
    .use(ElIcon)
    .use(ElTableColumn)
    .use(ElRadioButton)
    .use(ElOption)
    .use(ElTabs)
    .use(ElTabPane)
    .use(ElRadio)
    .use(ElDivider)
    .use(ElSelect)
    .use(ElInputNumber)
    .use(ElRadioGroup)
    .use(ElCard)
    .use(ElSwitch)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElCard)
    .use(ElCollapse)
    .use(ElCollapseItem)
    .mount("#app");
