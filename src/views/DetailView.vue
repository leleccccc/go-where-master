<template>
  <div class="gugong-detail">
    <div class="header">
      <i class="iconfont" @click="goBack">&#xe624;</i>
      <span>{{ this.$route.query.city }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailView',
  methods: {
    goBack () {
      this.$router.push('/')
    }
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
</style>
