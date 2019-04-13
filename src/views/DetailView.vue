<template>
  <div class="gugong-detail">
    <div class="header" v-show="showHeader" :style='styleOpacity'>
      <i class="iconfont" @click="goBack">&#xe624;</i>
      <span>{{ this.$route.query.city }}</span>
    </div>
    <div class="imgbox">
      <div class="iconfont" @click="goBack">&#xe624;</div>
      <div class="circle"></div>
      <img :src="this.$route.query.img" alt="" />
    </div>
    <div style="height: 1500px;"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailView',
  data () {
    return {
      showHeader: false,
      styleOpacity: {
        opacity: 0
      }
    }
  },
  methods: {
    goBack () {
      this.$router.push('/')
    }
  },
  mounted () {
    let that = this
    window.addEventListener('scroll', function () {
      // console.log(document.documentElement.scrollTop)
      let top = document.documentElement.scrollTop
      if (top > 10) {
        let changeOpacity = top / 130
        console.log(changeOpacity)
        changeOpacity = changeOpacity > 1 ? 1 : changeOpacity
        that.styleOpacity = { opacity: changeOpacity }
        that.showHeader = true
      } else {
        that.showHeader = false
      }
    })
  },
  activated () {
    document.documentElement.scrollTop = 0
  }
}
</script>

<style lang="stylus" scoped>
.gugong-detail
  width: 100%;
  font-size: 0.2rem;

.header
  width: 100%;
  height: 0.88rem;
  position: fixed;
  z-index: 2;
  background: #00bcd4;
  text-align: center;
  color: #fff;
  .iconfont
    position: absolute;
    left: 0.1rem;
    top: 50%;
    margin-top: -0.16rem;
  span
    line-height: 0.88rem;
    font-size: 0.3rem;

.imgbox
  position: relative;
  .iconfont
    position: absolute;
    left: 0.35rem;
    top: 0.4rem;
    color: #fff;
    font-weight: bold;
    z-index: 1;
  .circle
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    width: 0.7rem;
    height: 0.7rem;
    background: rgba(0,0,0,0.6);
    border-radius: 50%;
  img
    width: 100%;
    height: 4.1rem;
    vertical-align: middle;
</style>
