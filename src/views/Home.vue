<template>
  <div id="main" class="main-container">
    <div class="item-title">
      <div class="title-main">ATC Web</div>
      <div class="title-sub-title">for ECG</div>
    </div>
    <div class="item-nav">
      <div class="nav-item" @click="goToNewOrderPage">APP</div>
      <div class="nav-item" @click="goToHistoryPage">HISTORY</div>
      <div class="nav-item">MESSAGE</div>
      <div class="nav-item">TBD</div>
    </div>
    <div class="item-quote" @click="LoadQuote">{{ quote }}</div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script lang="ts" src="./Home.ts"/>
<style scoped lang="scss">
@import "../assets/styles/Global";
@import "../assets/styles/components";

.main-container {
  @extend .unselectable;
  @extend .grid-container-base;
  @include linear-gradiant-background($theme-black-70, $theme-black);
  font-family: $font-family-handwriting-ch;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  color: $theme-white;
  padding: 10px 20px 10px 10px;
}
.item-title {
  @extend .grid-item-base;
  @extend .grid-container-base;
  // item settings
  justify-self: start;
  align-self: stretch;
  grid-row: 1 / 2;
  grid-column: 2 / 7;
  // grid settings
  grid-template-columns: repeat(2, auto);

  .title-main {
    @extend .grid-item-base;
    font-size: 80px;
    font-weight: bold;
    white-space: nowrap;
  }
  .title-sub-title {
    @extend .grid-item-base;
    justify-self: center;
    align-self: end;
    grid-row: 1 / 2;
    grid-column: 7 / 8;
    @keyframes shake {
      0%, 85% {transform: rotate(0deg)}
      100% {transform: rotate(360deg)}
    }
    font-size: $font-size-large;
    animation: shake 6s ease 0s infinite normal;
  }
}
.item-nav {
  @extend .grid-item-base;
  @extend .grid-container-base;
  // item settings
  grid-row: 1 / 2;
  grid-column: 7 / 13;
  justify-self: stretch;
  align-self: stretch;
  // grid settings
  grid-template-columns: repeat(4, auto);
  justify-content: space-evenly;
  .nav-item {
    @extend .grid-item-base;
    align-self: end;
    justify-self: center;
    cursor: pointer;
    font-size: $font-size-title-large;
    margin-bottom: 10px;
    &:hover {
      color: $theme-pink;
      @keyframes bump {
        0% {padding: 0}
        5% {padding: 0 0 20px 0}
        10%, 100% {padding: 0}
      }
      animation: bump 4s ease 0s infinite normal;
    }
  }
}
.item-quote {
  @extend .grid-item-base;
  // item settings
  grid-row: 2 / 3;
  grid-column: 1 / 6;
  align-self: center;

  padding-top: 10px;
  cursor: pointer;
  &:hover {
    @keyframes float {
      0% {transform: rotate(0deg)}
      25% {transform: rotate(5deg)}
      75% {transform: rotate(-5deg)}
      100% {transform: rotate(0deg)}
    }
    animation: float 4s linear 0s infinite normal;
  }
}
#canvas {
  @extend .grid-item-base;
  z-index: 1;
  grid-column: 1 / 13;
  grid-row: 1 / 13;
}
.test {
  grid-row: 4 / 5;
  grid-column: 1 / 3;
  z-index: 2;
}
</style>
