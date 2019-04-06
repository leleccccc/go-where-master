<template>
  <div>
    <city-header></city-header>
    <!-- <city-hot-city :hotCityList='hotCityList'></city-hot-city>
    <city-sort :allCityList='allCityList'></city-sort>
    <city-all-city :allCityList="allCityList"></city-all-city> -->
    <city-content
     :hotCityList='hotCityList'
     :allCityList='allCityList'
     ></city-content>
  </div>
</template>

<script>
import CityHeader from '@/components/city/Header'
// import CityHotCity from '@/components/city/HotCity'
// import CitySort from '@/components/city/Sort'
// import CityAllCity from '@/components/city/AllCity'
import CityContent from '@/components/city/Content'

export default {
  name: 'CityView',
  components: {
    CityHeader,
    // CityHotCity,
    // CitySort,
    // CityAllCity
    CityContent
  },
  data () {
    return {
      hotCityList: [],
      allCityList: {}
    }
  },
  mounted () {
    this.$http.get('/api/dataCity.json')
      .then((res) => {
        // console.log(res.data.data)
        const data = res.data.data[0]
        this.hotCityList = data.hotCityList
        // console.log(data.hotCityList)
        // console.log(data.allCityList)
        this.allCityList = data.allCityList
      })
  }
}
</script>

<style scoped>

</style>
