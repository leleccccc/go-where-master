<template>
  <div>
    <!-- 热门城市 -->
    <div class="city">
      <div>热门城市</div>
      <ul>
        <li v-for="item in hotCityList" :key="item.id">
          <a href="">{{ item.city }}</a>
        </li>
      </ul>
    </div>
    <!-- 字母排序 -->
    <div class="sort">
      <div>字母排序</div>
      <div>
        <ul>
          <li v-for="(item, key) in allCityList" :key="item.id">
            {{ key }}
          </li>
        </ul>
      </div>
    </div>
    <!-- A-Z排序 -->
    <div class="all-city-list">
      <div class="city-item" v-for="(item, key) in allCityList" :key="key">
        <div>{{ key }}</div>
        <ul>
          <li v-for="val in item" :key="val.id">
            <a href="">{{ val.city }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityContent',
  props: ['hotCityList', 'allCityList']
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/var.styl"

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
      display: inline-block;
      width: 33.33%;
      height: 0.9rem;
      text-align: center;
      line-height: 0.9rem;
      border-bottom: 0.02rem solid #ddd;
      a
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
      width: 25%;
      height: 100%;
      border-left: 0.02rem solid #ddd;
      border-right: 0.02rem solid #ddd;
      left: 25%;
    &::after
      content: "";
      position: absolute;
      width: 25%;
      height: 100%;
      border-right: 0.02rem solid #ddd;
      left: 50%;
      top: 0;
    li
      display: inline-block;
      width: 25%;
      height: 0.9rem;
      text-align: center;
      line-height: 0.9rem;
      border-bottom: 0.02rem solid #ddd;
      font-size: 0.3rem;
      textOverflow();
</style>
