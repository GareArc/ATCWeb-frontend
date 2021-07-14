<template>
  <div class="main-container">
    <el-card class="card">
      <div class="card-item-col-1">选择超市:</div>
      <el-radio-group v-model="itemInfo.shop" class="card-item-col-2">
        <el-radio-button label="NORMAL" @click="OnShopChange(3)">普通超市</el-radio-button>
        <el-radio-button label="JNC" @click="OnShopChange(2)">金牛城Online</el-radio-button>
        <el-radio-button label="UBER" @click="OnShopChange(1)">Uber Eats</el-radio-button>
      </el-radio-group>
      <div class="card-item-col-1">选择类型:</div>
      <el-radio-group v-model="itemInfo.relation" class="card-item-col-2">
        <el-radio label="ALL" @click="OnRelationChange(3)">三人</el-radio>
        <el-radio label="SHARED" @click="OnRelationChange(2)">双人</el-radio>
        <el-radio label="INDIVIDUAL" @click="OnRelationChange(1)">个人</el-radio>
      </el-radio-group>
      <div v-if="canShowShareType" class="card-item-col-1">具体是指:</div>
      <el-radio-group v-if="canShowShareType"
                      v-model="itemInfo.shareType"
                      class="card-item-col-2">
        <el-radio label="TARGETS" @click="OnShareTypeChange(1)" >{{ shareTypeTargets }}</el-radio>
        <el-radio label="WITHTARGET1"
                  @click="OnShareTypeChange(2)">{{ shareTypeTarget1 }}</el-radio>
        <el-radio label="WITHTARGET2"
                  @click="OnShareTypeChange(3)">{{ shareTypeTarget2 }}</el-radio>
      </el-radio-group>
      <div v-if="canShowTargetOption" class="card-item-col-1">选择对象:</div>
      <el-radio-group v-if="canShowTargetOption"
                      v-model="selectedTarget"
                      class="card-item-col-2">
        <el-radio :label=order.Target1Info>{{ order.Target1Info }}</el-radio>
        <el-radio :label=order.Target2Info>{{ order.Target2Info }}</el-radio>
      </el-radio-group>
      <div class="card-item-col-1">输入价格(可输入):</div>
      <el-input-number
          v-model="itemInfo.price"
          :precision="2"
          :step="0.01"
          :step-strictly="true"
          :min="0.01"
          class="card-item-col-2" />
      <div class="card-item-col-1">输入数量(可输入):</div>
      <el-input-number
          v-model="itemInfo.quantity"
          :precision="0"
          :step="1"
          :step-strictly="true"
          :min="1"
          class="card-item-col-2" />
      <div class="card-item-col-1">是否收税?</div>
      <el-switch v-model="itemInfo.isTaxed"
          active-text="含税"
          inactive-text="无税"
          class="card-item-col-2"/>
      <el-button type="primary"
          plain
          class="card-item-submit"
          @click="submit">提交</el-button>
    </el-card>
<!--          <div>{{ "relation: " + itemInfo.relation }}</div>-->
<!--          <div>{{ "shareType: " + itemInfo.shareType }}</div>-->
<!--          <div>{{ "shop: " + itemInfo.shop }}</div>-->
<!--          <div>{{ "price: " + itemInfo.price }}</div>-->
<!--          <div>{{ "quantity: " + itemInfo.quantity }}</div>-->
<!--          <div>{{ "isTaxed: " + itemInfo.isTaxed }}</div>-->
  </div>
</template>

<script lang="ts" src="./CreateItemForm.ts"/>

<style scoped lang="scss">
@import "../../assets/styles/Global";
@import "../../assets/styles/components";
.main-container {
  .card {
    ::v-deep(.el-card__body){
      @extend .grid-container-base;
      // grid settings
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(auto-fill, 1fr);
      justify-self: stretch;
      align-self: stretch;
      grid-row-gap: 50px;
      grid-column-gap: 3%;

      .card-item-col-1 {
        @extend .grid-item-base;
        //item settings
        grid-column: 4 / 6;
        justify-self: start;

        @extend .flex-container-base;
        align-items: center;
        font-size: $font-size-extra-large;
      }

      .card-item-col-2 {
        @extend .grid-item-base;
        // item settings
        grid-column: 6 / 12;
        justify-self: start;
        align-self: center;

        .el-radio__inner {
          width: 16px;
          height: 16px;
        }
        .el-radio__inner::after {
          width: 6px;
          height: 6px;
        }
        .el-radio__label {
          padding-top: 3px;
          font-size: $font-size-extra-large;
        }
        .el-radio-button__inner {
          font-size: $font-size-extra-large;
        }
        .el-radio__input {
          margin-bottom: 2px;
        }
        .el-switch__label * {
          font-size: $font-size-extra-large;
        }
      }

      .card-item-submit {
        @extend .grid-item-base;
        //item settings
        grid-column: 6 / 10;
        justify-self: start;

        width: 30%;
        height: 100%;
      }
    }
  }

}



</style>
