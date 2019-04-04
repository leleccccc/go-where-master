<template>
  <div class="location border-top">
    <div class="border-right">
      <!-- span换行会有空白 -->
      <i class="iconfont">&#xe63f;</i>&thinsp;<span class="option">定位失败</span>
    </div>
    <div>
      <i class="iconfont">&#xe611;</i>&thinsp;<span class="option">必游榜单</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLocation'
}
</script>

<style lang="stylus" scoped>
.location
  width: 100%;
  height: 1rem;
  background: #fff;
  position: relative;
  div
    float: left;
    width: 50%;
    height: 1rem;
    text-align: center;
    line-height: 0.8rem;  // 垂直居中?????
    .iconfont
      font-size: 0.4rem;
      vertical-align: middle; // 默认基线对齐
    .option
      font-size: 0.28rem;
      vertical-align: middle; // 默认基线对齐

</style>
