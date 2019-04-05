<template>
  <div class="header-swiper">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(item, index) in swiperList" :key="index">
      <img :src="item.imgUrl" alt="" />
    </swiper-slide>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
  </swiper>
  </div>
</template>

<script>
export default{
  name: 'HomeSwiper',
  props: ['swiperList'],
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },
        // observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        // observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        // disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
        loop: true, // 图片循环模式选项
        // autoplay: true // 自动切换,等同于autoplay: {delay: 3000,stopOnLastSlide: false,disableOnInteraction: true,}
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          stopOnLastSlide: false
        }
      }
      // swiperList: [
      //   { id: 1, imgUrl: require('@/assets/img/swiper0.jpg') },
      //   { id: 2, imgUrl: require('@/assets/img/swiper1.jpg') },
      //   { id: 3, imgUrl: require('@/assets/img/swiper2.jpg') },
      //   { id: 4, imgUrl: require('@/assets/img/swiper3.jpg') },
      //   { id: 5, imgUrl: require('@/assets/img/swiper4.jpg') },
      //   { id: 6, imgUrl: require('@/assets/img/swiper5.jpg') },
      //   { id: 7, imgUrl: require('@/assets/img/swiper6.jpg') },
      //   { id: 8, imgUrl: require('@/assets/img/swiper7.jpg') }
      // ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-swiper
  width: 100%;
  height: 2rem;
  background: #ccc;
  // height: 0;   // 防止网速太慢掉块
  // padding-bottom: 26.67%;
  img
    width: 100%;
    height: 100%;

.header-swiper >>> .swiper-pagination-bullet-active,  //stylus样式穿透，外层 >>> 第三方组件
.header-swiper >>> .swiper-pagination-bullet
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 0.05rem;
  background: #fff;
</style>
