<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe632;输入城市/景点/游玩主题</span>
    </div>
    <div class="header-right">
      <span class="iconfont">北京&#xe600;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
.header
  width: 100%;
  height: .88rem;
  background: #00bcd4;
  color: #fff;
  font-size: .36rem;
  display: flex;
  line-height: .88rem;
  .header-left
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
  .header-search
    flex: 1;
    background: #fff;
    height: .6rem;
    margin: .14rem 0;
    border-radius: .1rem;
    color: #e4e7ea;
    line-height: .6rem;
    font-size: .2rem;
    padding-left: .2rem;
  .header-right
    font-size: .2rem;
    padding: 0 .2rem;

.iconfont
  font-size: 0.3rem;
</style>
