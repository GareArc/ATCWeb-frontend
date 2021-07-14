<template>
  <div class="container">
    <el-card class="card">
      <el-form label-position="right" label-width="20%">
        <el-form-item label="选择对象1:">
          <el-select v-model="order.Target1Info">
            <el-option v-for="target in targetList"
                       :key="target.value"
                       :label="target.label"
                       :value="target.value"
                       :disabled="target.value === order.Target2Info"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="选择对象2:">
          <el-select v-model="order.Target2Info">
            <el-option v-for="target in targetList"
                       :key="target.value"
                       :label="target.label"
                       :value="target.value"
                       :disabled="target.value === order.Target1Info"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="电费:">
          <el-input-number v-model="order.Fees.electricityFee"
                           :precision="2"
                           :step="0.01"
                           :min="0"/>
        </el-form-item>
        <el-form-item label="Amazon费:">
          <el-input-number v-model="order.Fees.amazonFee"
                           :precision="2"
                           :step="0.01"
                           :min="0"/>
        </el-form-item>
        <el-form-item label="网费:">
          <el-input-number v-model="order.Fees.internetFee"
                           :precision="2"
                           :step="0.01"
                           :min="0"/>
        </el-form-item>
        <el-form-item label="其它:">
          <el-input-number v-model="order.Fees.otherFee"
                           :precision="2"
                           :step="0.01"
                           :min="0"/>
        </el-form-item>

      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" src="./BasicInfo.ts"/>

<style scoped lang="scss">
@import "../../assets/styles/Global";
@import "../../assets/styles/components";

.container {
  @extend .grid-container-base;
  // item settings
  justify-items: center;

  ::v-deep(.el-form-item__label) {
    font-size: $font-size-extra-large;
  }
  ::v-deep(.el-form-item__content) {
     font-size: $font-size-large;
   }
}

.fees-item {
  @extend .grid-container-base;
  //grid settings
  grid-template-columns: repeat(2, 1fr);
  // item settings
  justify-items: center;
}
.card {
  width: 40%;
}

</style>
