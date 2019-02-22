<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe632;</span>
      <span>输入城市/景点/游玩主题</span>
    </div>
    <div class="header-right">
      <span class="iconfont">北京&#xe600;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style lang="stylus" scoped>
.header
  width: 100%;
  height: .44rem;
  background: #00bcd4;
  color: #fff;
  font-size: .18rem;
  display: flex;
  line-height: .44rem;
  .header-left
    width: .2rem;
    padding: 0 .1rem;
    text-align: center;
    font-weight: bold;
  .header-search
    flex: 1;
    background: #fff;
    height: .3rem;
    margin: .07rem 0;
    border-radius: .05rem;
    color: #e4e7ea;
    line-height: .3rem;
    font-size: .1rem;
    padding-left: .1rem;
  .header-right
    font-size: .1rem;
    padding: 0 .1rem;
</style>
