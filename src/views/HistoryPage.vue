<template>
  <div>
    <el-select v-model="selected">
        <el-option
            v-for="order in orderList"
            :key="order.uuid"
            :label="order.dateTime"
            :value="order.uuid"></el-option>
    </el-select>
    <el-button @click="RenderSummary">Confirm</el-button>
    <el-button :disabled="!afterConfirm" @click="generateTxT">Check</el-button>
    <el-collapse v-if="afterConfirm">
      <el-collapse-item title="基本信息" name="1">
        <el-card>
          <div>UUID: {{summaryInfo.uuid}}</div>
          <div>电费: {{summaryInfo.electricityFee}}</div>
          <div>Amazon费: {{summaryInfo.amazonFee}}</div>
          <div>网费: {{summaryInfo.internetFee}}</div>
          <div>其它: {{summaryInfo.otherFee}}</div>
        </el-card>
      </el-collapse-item>

      <el-collapse-item title="三人部分" name="2">
        <el-card>
          <div v-for="(item, index) in summaryInfo.itemsForAll"
               :key="index">{{item}}</div>
        </el-card>
      </el-collapse-item>

      <el-collapse-item :title="summaryInfo.target1Info" name="3">
        <el-card>
          <div v-for="(item, index) in summaryInfo.itemsForTarget1"
               :key="index">{{item}}</div>
        </el-card>
      </el-collapse-item>

      <el-collapse-item :title="summaryInfo.target2Info" name="4">
        <el-card>
          <div v-for="(item, index) in summaryInfo.itemsForTarget2"
               :key="index">{{item}}</div>
        </el-card>
      </el-collapse-item>

      <el-collapse-item title="总计" name = "5">
        <el-card>
          <div>{{summaryInfo.target1Info}} : {{summaryInfo.totalTarget1}}</div>
          <div>{{summaryInfo.target2Info}} : {{summaryInfo.totalTarget2}}</div>
        </el-card>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script src="./HistoryPage.ts"/>

<style scoped>

</style>
