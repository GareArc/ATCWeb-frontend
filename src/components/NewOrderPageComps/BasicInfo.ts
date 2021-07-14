import {Vue} from "vue-class-component";
import {Inject} from "vue-property-decorator";
import {OrderBaseInfo} from "@/components/business/Order/order-base-info";

export default class BasicInfo extends Vue {
    @Inject()
    order!: OrderBaseInfo

    targetList = [
        {label: "Charlie", value: "Charlie"},
        {label: "Gareth", value: "Gareth"},
        {label: "Ethan", value: "Ethan"}
    ];
}
