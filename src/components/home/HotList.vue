<template>
  <div class="hot-list">
    <div class="hot-list-title">
      <img src="@/assets/img/hot.png" alt="" />
      <span>本周热门榜单</span>
      <span>全部榜单</span>
      <div class="right-arrow"></div>
    </div>
    <ul>
      <li v-for="(item, index) in hotList" :key="item.id" @click="goDetailView(item,index)">
        <img :src="item.imgUrl" alt="" />
        <p>{{ item.title }}</p>
        <span>{{ item.price }}</span><span>起</span>
      </li>
      <img class="top1" src="@/assets/img/top1.png" alt="" />
      <img class="top2" src="@/assets/img/top2.png" alt="" />
      <img class="top3" src="@/assets/img/top3.png" alt="" />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeHotList',
  props: ['hotList'],
  data () {
    return {
      // hotList: [
      //   { id: 1, imgUrl: require('@/assets/img/sights0.jpg'), title: '宋城千古情', price: '￥310' },
      //   { id: 2, imgUrl: require('@/assets/img/sights1.jpg'), title: '千岛湖', price: '￥24' },
      //   { id: 3, imgUrl: require('@/assets/img/sights2.jpg'), title: '西溪国家湿地公园·周家村', price: '￥460' },
      //   { id: 4, imgUrl: require('@/assets/img/sights3.jpg'), title: '灵隐寺', price: '￥45' },
      //   { id: 5, imgUrl: require('@/assets/img/sights4.jpg'), title: '杭州乐园', price: '￥160' },
      //   { id: 6, imgUrl: require('@/assets/img/sights5.jpg'), title: '杭州动物园', price: '￥20' },
      //   { id: 7, imgUrl: require('@/assets/img/sights6.jpg'), title: '西溪国家湿地公园', price: '￥40' },
      //   { id: 8, imgUrl: require('@/assets/img/sights7.jpg'), title: '杭州野生动物世界', price: '￥210' },
      //   { id: 9, imgUrl: require('@/assets/img/sights8.jpg'), title: '杭州飞来峰', price: '￥45' }
      // ]
    }
  },
  methods: {
    goDetailView (item, index) {
      this.$router.push({
        path: '/DetailView',
        query: {
          city: item.title
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/var.styl';

.hot-list
  width: 100%;
  font-size: 0.35rem;
  margin-top: 0.2rem;
  background: #fff;
  padding: 0.2rem 0 0 0.1rem;
  box-sizing: border-box;

.hot-list-title
  img
    width: 0.35rem;
    height: 0.35rem;
  span:nth-child(2)
    font-weight: bold;
    vertical-align: 10%;
  span:nth-child(3)
    margin-left: 2.6rem;
    // vertical-align: 10%;

ul
  width: 100%;
  position:relative;
  height: 3.5rem;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  li
    width: 30%;
    height: 3rem;
    // float: left;
    display: inline-block;
    margin: 0.4rem 0 0 0.15rem;
    text-align: center;
    font-size: 0.3rem;
    img
      width: 100%;
    p:nth-child(2)
      // overflow: hidden;
      // text-overflow: ellipsis;
      textOverflow();
    span:nth-child(3)
      color: $price-color;
  li:first-child
    margin-left: 0.3rem;
  li:nth-child(10)
    margin-right: 0.4rem;

// 榜单1、2、3图片样式
.top1
  width: 0.92rem;
  height:0.44rem;
  position:absolute;
  left: 0.2rem;
  top:0.2rem;

.top2
  @extend .top1;
  left: 2.6rem;

.top3
  @extend .top1;
  left: 5.0rem;
</style>
