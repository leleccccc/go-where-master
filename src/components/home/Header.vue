<template>
  <div class="header">
    <div class="header-left" @click="goBack">
      <i class="iconfont">&#xe624;</i>
    </div>
    <div class="header-search" @click="goSearchView">
      <i class="iconfont">&#xe632;输入城市/景点/游玩主题</i>
    </div>
    <div class="header-right" @click="goCityView">
      <div>{{ city }}</div>
      <i class="iconfont">&#xe600;</i>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeHeader',
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    goSearchView () {
      this.$router.push({path: '/SearchView'})
    },
    goCityView () {
      // this.$router.push('/CityView')
      this.$router.push({name: 'CityView'})
      // this.$router.push({path: '/CityView'})
      // this.$router.replace('/CityView')
    }
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
.header
  width: 100%;
  height: 0.88rem;
  background: #00bcd4;
  color: #fff;
  font-size: 0.36rem;
  display: flex;
  line-height: 0.88rem;
  .header-left
    width: 0.4rem;
    padding: 0 0.2rem;
    text-align: center;
    font-weight: bold;
  .header-search
    flex: 1;
    background: #fff;
    height: 0.6rem;
    margin: 0.14rem 0;
    border-radius: 0.1rem;
    color: #e4e7ea;
    line-height: 0.6rem;
    font-size: 0.2rem;
    padding-left: 0.2rem;
  .header-right
    display: flex;
    max-width: 1.5rem;
    font-size: 0.28rem;
    padding: 0 0.2rem;
    // div
    //   max-width: 1.5rem;
    //   overflow: hidden;

.iconfont
  font-size: 0.3rem;
</style>
