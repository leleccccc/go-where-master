<template>
  <div class="activity border-top">
    <div class="border-right">
      <img src="@/assets/img/sell.png" alt="" />
    </div>
    <div>
      <img src="@/assets/img/vacation.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeActivity'
}
</script>

<style lang="stylus" scoped>
.activity
  width: 100%;
  height: 1.5rem;
  background: #fff;
  margin-top: 0.3rem;
  position: relative;
  div
    width: 50%;
    height: 1.5rem;
    float: left;
    img
      width: 100%;
      height: 100%;
      vertical-align: middle;
</style>
