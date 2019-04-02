<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in page" :key="index">
        <div class="icons-item" v-for="page in item" :key="page.id">
          <img :src="page.imgUrl" alt="" />
          <p>{{ page.title }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: ['iconsList'],
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
      // iconsList: [
      //   { id: 1, imgUrl: require('@/assets/img/icon0.png'), title: '景点门票' },
      //   { id: 2, imgUrl: require('@/assets/img/icon1.png'), title: '一日游' },
      //   { id: 3, imgUrl: require('@/assets/img/icon2.png'), title: '北京必游' },
      //   { id: 4, imgUrl: require('@/assets/img/icon3.png'), title: '溜娃儿' },
      //   { id: 5, imgUrl: require('@/assets/img/icon4.png'), title: '爬长城' },
      //   { id: 6, imgUrl: require('@/assets/img/icon5.png'), title: '故宫' },
      //   { id: 7, imgUrl: require('@/assets/img/icon6.png'), title: '茶馆相声' },
      //   { id: 8, imgUrl: require('@/assets/img/icon7.png'), title: '踏青赏花' },
      //   { id: 9, imgUrl: require('@/assets/img/icon8.png'), title: '泡温泉' },
      //   { id: 10, imgUrl: require('@/assets/img/icon9.png'), title: '动物植物' }
      // ]
    }
  },
  computed: {
    page () {
      let pages = []
      this.iconsList.forEach((item, index) => {
        let idx = Math.floor(index / 8)
        if (!pages[idx]) {
          pages[idx] = []
        }
        pages[idx].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
.icons
  width: 100%;
  height: 4.35rem;
  background: #fff;

.swiper-container
  height: 4.35rem;

.icons-item
  width: 25%;
  height: 2rem;
  float: left;
  img
    width: 60%;
    height: 55%;
    display: block;
    margin: 0.2rem auto;
  p
    font-size: 0.28rem;
    text-align: center;

.swiper-pagination   // 分页器按钮位置
  position: absolute;
  top: 3.3rem;

.icons >>> .swiper-pagination-bullet-active,
.icons >>> .swiper-pagination-bullet
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 0.1rem;
</style>
