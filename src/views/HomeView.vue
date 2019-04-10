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
    <home-ad></home-ad>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HomeHeader from '@/components/home/Header'
import HomeSwiper from '@/components/home//Swiper'
import HomeIcons from '@/components/home/Icons'
import HomeLocation from '@/components/home/Location'
import HomeActivity from '@/components/home/Activity'
import HomeHotList from '@/components/home/HotList'
import HomeLike from '@/components/home/Like'
import HomeGoWhere from '@/components/home/GoWhere'
import HomeFooter from '@/components/home/Footer'
import HomeAd from '@/components/home/Ad'

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
    HomeFooter,
    HomeAd
  },
  data () {
    return {
      swiperList: [],
      iconsList: [],
      hotList: [],
      likeList: [],
      goWhereList: [],
      selectCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHttp () {
      this.$http.get('/api/dataHome.json')
        .then((res) => {
          // console.log(res.data.data)
          // const data = res.data.data[0]
          // this.swiperList = data.swiperList
          // this.iconsList = data.iconsList
          // this.hotList = data.hotList
          // this.likeList = data.likeList
          // this.goWhereList = data.goWhereList
          const data = res.data.data
          data.forEach((item, index) => {
            if (item.city === this.city) {
              this.swiperList = item.swiperList
              this.iconsList = item.iconsList
              this.hotList = item.hotList
              this.likeList = item.likeList
              this.goWhereList = item.goWhereList
            }
          })
        })
    }
  },
  mounted () {
    this.selectCity = this.city
    this.getHttp()
  },
  activated () {
    // console.log(this.city, this.selectCity)
    if (this.city !== this.selectCity) {
      this.getHttp()
      this.selectCity = this.city
    }
  }
}
</script>

<style scoped>

</style>
