<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconsList="iconsList"></home-icons>
    <home-location></home-location>
    <home-activity></home-activity>
    <home-hot-list :hotList="hotList"></home-hot-list>
    <home-like :likeList="likeList"></home-like>
    <home-go-where :goWhereList="goWhereList"></home-go-where>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '@/components/home/Header'
import HomeSwiper from '@/components/home//Swiper'
import HomeIcons from '@/components/home/Icons'
import HomeLocation from '@/components/home/Location'
import HomeActivity from '@/components/home/Activity'
import HomeHotList from '@/components/home/HotList'
import HomeLike from '@/components/home/Like'
import HomeGoWhere from '@/components/home/GoWhere'
import HomeFooter from '@/components/home/Footer'

export default {
  name: 'HomeView',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeLocation,
    HomeActivity,
    HomeHotList,
    HomeLike,
    HomeGoWhere,
    HomeFooter
  },
  data () {
    return {
      swiperList: [],
      iconsList: [],
      hotList: [],
      likeList: [],
      goWhereList: []
    }
  },
  mounted () {
    this.$http.get('/api/dataHome.json')
      .then((res) => {
        // console.log(res.data.data)
        const data = res.data.data[0]
        this.swiperList = data.swiperList
        this.iconsList = data.iconsList
        this.hotList = data.hotList
        this.likeList = data.likeList
        this.goWhereList = data.goWhereList
      })
  }
}
</script>

<style scoped>

</style>
