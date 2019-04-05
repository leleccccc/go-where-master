<template>
  <div class="city-header">
    <div class="city-title">
      <i class="iconfont" @click="goHome">&#xe624;</i>
      <p>城市选择</p>
    </div>
    <div class="tab">
      <ul>
        <li @click="domestic" ref="domestic">境内</li>
        <li @click="abroad" ref="abroad">境外·港澳台</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  methods: {
    goHome () {
      this.$router.push('/')
    },
    domestic () {
      this.$refs.domestic.style.background = '#fff'
      this.$refs.domestic.style.color = '#00bcd4'
      this.$refs.abroad.style.background = '#00bcd4'
      this.$refs.abroad.style.color = '#fff'
      this.$refs.abroad.style.border = '0.01rem solid #fff'
    },
    abroad () {
      this.$refs.abroad.style.background = '#fff'
      this.$refs.abroad.style.color = '#00bcd4'
      this.$refs.domestic.style.background = '#00bcd4'
      this.$refs.domestic.style.color = '#fff'
      this.$refs.domestic.style.border = '0.01rem solid #fff'
    }
  }
}
</script>

<style lang="stylus" scoped>
.city-title
  width: 100%;
  height: 0.68rem;
  background: #00bcd4;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  i
    position: absolute;
    left: 0.3rem;
    top: 0.2rem;
    font-weight: bolder;
  p
    font-size: 0.35rem;
  &::before
    content: "";
    position: absolute;
    width: 100%;
    hegiht: 0.01rem;
    border-bottom: 0.01rem solid #fff;
    left: 0;
    bottom: 0;

.tab
  width: 100%;
  height: 0.8rem;
  background: #00bcd4;
  overflow: hidden;
  ul
    width: 5.46rem;
    height: 0.4rem;
    margin: 0.2rem auto;
    // padding-top: 1px;
    li
      box-sizing: border-box;
      width:50%;
      height: 0.4rem;
      // display: inline-block;
      float: left;
      font-size: 0.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    li:first-child
      background: #fff;
      color: #00bcd4;
    li:last-child
      background: #00bcd4;
      color: #fff;
      border: 0.01rem solid #fff;
</style>
