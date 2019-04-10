<template>
  <div class="ad" v-show="isShow">
    <div class="circle" @click="closeAd">
      <div class="cross-1"></div>
      <div class="cross-2"></div>
    </div>
    <img src="@/assets/img/logo.png" alt="" />
    <div class="word">
      <p>使用去哪儿门票客户端</p>
      <p>享受专属优惠体验更流畅</p>
    </div>
    <button type="button">立即下载</button>
  </div>
</template>

<script>
export default {
  name: 'HomeAd',
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    closeAd () {
      this.isShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.ad
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  font-size: 0.2rem;
  .circle
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 0 0.2rem 2rem 0;
    background: #afafaf;
    .cross-1
      width: 0.3rem;
      height: 0.03rem;
      position: absolute;
      left: 0.05rem;
      top: 0.2rem;
      background: #fff;
      transform: rotate(45deg);
    .cross-2
      width: 0.3rem;
      height: 0.03rem;
      position: absolute;
      left: 0.05rem;
      top: 0.2rem;
      background: #fff;
      transform: rotate(-45deg);
  img
    width: 0.7rem;
    height: 0.7rem;
    margin: 0.15rem 0 0 0.7rem;
    border-radius: 0.1rem;
  .word
    position: absolute;
    left: 1.7rem;
    top: 0.25rem;
    color: #fff;
  button
    position: absolute;
    right: 0.3rem;
    top: 0.25rem;
    width: 1.4rem;
    height: 0.58rem;
    background: rgba(0,0,0,0.8);
    color: #1d8f96;
    border: 0.02rem solid #1d8f96;
    border-radius: 0.1rem;
    font-size: 0.1rem;
</style>
