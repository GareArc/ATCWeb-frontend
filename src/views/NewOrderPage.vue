<template>
  <div>
    <el-tabs>
      <el-tab-pane label="基础设定">
        <BasicInfo></BasicInfo>
      </el-tab-pane>

      <el-tab-pane label="添加物品">
        <CreateItemForm></CreateItemForm>
      </el-tab-pane>

      <el-tab-pane :label="getTabThreePeople">
        <TableThreePeople></TableThreePeople>
      </el-tab-pane>

      <el-tab-pane :label="getTabTarget1">
        <TableTarget1></TableTarget1>
      </el-tab-pane>

      <el-tab-pane :label="getTabTarget2">
        <TableTarget2></TableTarget2>
      </el-tab-pane>

      <el-tab-pane label="提交">
        <Submit></Submit>
      </el-tab-pane>
    </el-tabs>

    <el-divider></el-divider>
  </div>
</template>

<script src = "./NewOrderPage.ts" />

<style scoped lang="scss">

</style>
