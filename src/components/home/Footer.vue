<template>
  <div class="footer">
    <div class="notice"><i class="iconfont">&#xe68b;</i>票面价是指通过景区指定窗口售卖的纸质门票上标注的价格</div>
    <div class="border-bottom">
      <ul>
        <li><i class="iconfont">&#xe63e;</i><a href="">机票</a></li>
        <li><i class="iconfont">&#xe64f;</i><a href="">酒店</a></li>
        <li><i class="iconfont">&#xe692;</i><a href="">公寓</a></li>
        <li><i class="iconfont">&#xe601;</i><a href="">更多</a></li>
      </ul>
      <ul>
        <li><a href="">登录</a></li>
        <li><a href="">我的订单</a></li>
        <li><a href="">最近游览</a></li>
        <li><a href="">关于我们</a></li>
      </ul>
    </div>
    <div>
      <ul class="pc-mobile">
        <li><a href="">触屏版</a></li
        ><li><a href="">电脑版</a></li>
      </ul>
    </div>
    <div class="leleccccc">版权leleccccc</div>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style lang="stylus" scoped>
.footer
  font-size: 0.2rem;

.notice
  height: 0.5rem;
  line-height: 0.5rem;
  background: #fff;
  margin-top: 0.5rem;
  color: #616161;
  padding-left: 0.2rem;

.border-bottom
  position: relative;
  height: 1rem;
  font-size: 0.3rem;
  ul:first-child
    text-align: center;
    li
     display: inline-block;
     margin-left: 0.2rem;
     a
       color: #9e9e9e;
  ul:last-child
    margin-top: 0.2rem;
    li
      display: inline-block;
      margin-left: 0.2rem;
      a
        color: #25a4bb;

.pc-mobile
  margin-top: 0.2rem;
  li:first-child
    box-sizing: border-box;
    display: inline-block;
    width:50%;
    padding-left: 30%;
  li:last-child
    box-sizing: border-box;
    display: inline-block;
    width:50%;
    padding-left: 10%;

.leleccccc
  text-align: center;
  padding-top: 0.2rem;
</style>
