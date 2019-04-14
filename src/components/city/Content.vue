<template>
  <!-- better-scroll插件需要2层div嵌套 -->
  <div ref="container" class="container">
    <div class="content">
      <!-- 热门城市 -->
      <div class="city">
        <div>热门城市</div>
        <ul>
          <li v-for="item in hotCityList" :key="item.id" @click="changeCityName(item.city)">
            {{ item.city }}
          </li>
        </ul>
      </div>
      <!-- 字母排序 -->
      <div class="sort">
        <div>字母排序</div>
        <div>
          <ul>
            <li v-for="(item, key) in allCityObject" :key="item.id" @click="searchSort(key)">
              {{ key }}
            </li>
          </ul>
        </div>
      </div>
      <!-- A-Z排序 -->
      <div class="all-city-list">
        <div class="city-item" v-for="(item, key) in allCityObject" :key="key" :ref="key">
          <div>{{ key }}</div>
          <ul>
            <li v-for="val in item" :key="val.id" @click="changeCityName(val.city)">
              {{ val.city }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  name: 'CityContent',
  props: ['hotCityList', 'allCityObject'],
  data () {
    return {
      scroll: ''
    }
  },
  mounted () {
    // console.log(this.$refs['container'])
    let container = this.$refs['container']
    this.scroll = new BScroll(container)
  },
  methods: {
    searchSort (sortCityName) {
      // console.log(sortCityName)
      // console.log(this.$refs[sortCityName][0])
      this.scroll.scrollToElement(this.$refs[sortCityName][0])
    },
    changeCityName (CityName) {
      // console.log(hotCityName)
      this.$router.push('/')
      this.changeCity(CityName) // 接受一个实参
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/var.styl"

// better-scroll插件
.container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 1.48rem;
  overflow: hidden;
}
// 热门城市
.city
  div
    box-sizing: border-box;
    width: 100%;
    height: 0.72rem;
    font-size: 0.25rem;
    padding: 0.2rem 0 0 0.2rem;
  ul
    background: #fff;
    font-size: 0.3rem;
    position: relative;
    &::before
      position: absolute;
      content: "";
      width: 33.33%;
      height: 100%;
      border-left: 0.02rem solid #ddd;
      border-right: 0.02rem solid #ddd;
      left: 33.33%;
    li
      position: relative;  // 覆盖伪元素层
      display: inline-block;
      width: 33.33%;
      height: 0.9rem;
      text-align: center;
      line-height: 0.9rem;
      border-bottom: 0.02rem solid #ddd;
      color: #212121;

// 字母排序
.sort
  div:first-child
    box-sizing: border-box;
    width: 100%;
    height: 0.72rem;
    font-size: 0.25rem;
    padding: 0.2rem 0 0 0.2rem;
  div:last-child
    background: #fff;
    height: 4.6rem;
    font-size: 0.3rem;
    overflow: hidden;
    ul
      height: 4rem;
      margin-top: 0.3rem;
      // font-size: 0;
      li
        display: inline-block;
        width: 16.66%;
        height: 25%;
        text-align: center;
        line-height: 1rem;
        // font-size: 0.3rem;

// A-Z排序
.city-item
  font-size: 0.3rem;
  div
    box-sizing: border-box;
    width: 100%;
    height: 0.72rem;
    font-size: 0.25rem;
    padding: 0.2rem 0 0 0.2rem;
  ul
    background: #fff;
    font-size: 0;
    position: relative;
    &::before
      content: "";
      position: absolute;
      width: 25%;   // width: 0;
      height: 100%;
      border-left: 0.02rem solid #ddd;
      border-right: 0.02rem solid #ddd;
      left: 25%;
    li
      position: relative; // 覆盖伪元素层
      z-index: 1;  // 覆盖同级堆叠顺序::after伪元素层,z-index大于等于1即可
      display: inline-block;
      width: 25%;
      height: 0.9rem;
      text-align: center;
      line-height: 0.9rem;
      border-bottom: 0.02rem solid #ddd;
      font-size: 0.3rem;
      textOverflow();
    &::after
      content: "";
      position: absolute;
      width: 25%;  // width: 0;
      height: 100%;
      border-right: 0.02rem solid #ddd;
      left: 50%; // with: 75%;
      top: 0;
</style>
