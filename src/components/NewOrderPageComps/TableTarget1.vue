<template>
  <div class="wrapper-temp">
    <el-table :data="order.Target1" border height="500px">
      <el-table-column prop="price" label="Price"></el-table-column>
      <el-table-column prop="quantity" label="Quantity"></el-table-column>
      <el-table-column label="isTaxed">
        <template #default="scope">
          <i v-if="scope.row.isTaxed" class="el-icon-check"></i>
          <i v-else class="el-icon-close"></i>
        </template>
      </el-table-column>
      <el-table-column label="Relation">
        <template #default="scope">
          <span>{{ getRelationDesc(scope.row) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Operation">
        <template #default="scope">
          <el-button type="danger" @click="deleteRow(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" src="./TableTarget1.ts"/>

<style scoped lang="scss">

</style>
