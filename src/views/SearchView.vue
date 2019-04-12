<template>
  <div class="search">
    <div class="header">
      <div class="header-left iconfont" @click="goBack">&#xe624;</div>
      <div class="header-search">
        <input type="text" name="search" placeholder="输入城市或景点名" />
      </div>
      <div class="header-right">搜索</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchView',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.search
  width: 100%;
  font-size: 0.3rem;
  text-align: center;
  .header
    width: 100%;
    height:0.88rem;
    background: #fff;
    display: flex;
    align-items: center;
    .header-left
      flex: 0 0 1rem;
      font-size: 0.3rem;
      font-weight: bold;
      // text-align: center;
    .header-search
      flex: auto;
      input
        box-sizing: border-box;
        width: 100%;
        height: 0.6rem;
        border: none;
        border-radius: 2.8rem;
        background: #f2f2f2;
        text-align: center;
        font-size: 0.3rem;
    .header-right
      flex: 0 0 1rem;
      // text-align: center;
</style>
