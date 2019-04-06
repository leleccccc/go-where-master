<template>
  <div class="like">
    <div class="like-title">
      <img src="@/assets/img/heart.png" alt="" />
      <span>猜你喜欢</span>
    </div>
    <ul class="like-items">
      <li class="border-bottom" v-for="item in likeList" :key="item.id">
        <!-- 左侧div -->
        <div class="items-img">
          <img :src="item.imgUrl" alt="" />
        </div>
        <!-- 右侧div -->
        <div class="items-details">
          <p>{{ item.title }}</p>
          <p>
            <!-- <my-rate :score="3.6" disabled showText></my-rate> -->
            <span>{{ item.evaluation }}</span>
            <span>条评论</span>
          </p>
          <p>
            <span>￥</span
            ><span>{{ item.price }}</span
            ><span>起</span>
            <span>{{ item.place }}</span>
          </p>
          <p>{{ item.description }}</p>
        </div>
        <!-- <div class="tags" ref="tags">1</div> -->
      </li>
      <!-- <img src="@/assets/img/tomorrow.png" /> -->
    </ul>
    <a href="" class="all">查看所有产品</a>
  </div>
</template>

<script>
// import MyRate from './Rate'

export default {
  name: 'HomeLike',
  props: ['likeList'],
  components: {
    // MyRate
  },
  methods: {
    // getIndex (index) {
    //   switch (index) {
    //     case index == (0||1||3||4||5||6||8||9||11||13||16||17||18||19||22||23||24):
    //     this.refs.tags.style.background = 'url("@/assets/img/now.png")'
    //     this.refs.tags.style.innerHTML = '随买随用'
    //     break
    //     case index == (7||10||12||21):
    //     this.refs.tags.style.background = 'url("@/assets/img/tomorrow.png")'
    //     this.refs.tags.style.innerHTML = '可订明日'
    //     break
    //     default:
    //     this.refs.tags.style.background = ''
    //     this.refs.tags.style.innerHTML = ''
    //   }
    // }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/var.styl';

.like
  background: #fff;
  margin-top: 0.2rem;

.like-title
  box-sizing: border-box;
  width: 100%;
  height: 1rem;
  font-size: 0.3rem;
  padding: 0.2rem 0 0 0.2rem;
  img
    width: 0.3rem;
    height: 0.3rem;
  span
    vertical-align: 10%;

ul.like-items
  width: 100%;
  font-size: 0.2rem;
  li:last-child
    margin-bottom: 0;
  li
    position: relative;
    width: 100%;
    // height: 3rem;
    margin-bottom: 0.2rem;
    .items-img
      float: left;
      margin: 0 0 0 0.3rem;
      img
        width: 2rem;
        height: 2rem;
        vertical-align: middle;  // 去除div包裹图片的白底
    .items-details
      // height: 3rem;
      overflow: hidden;
      p:nth-child(1)
        margin: 0.3rem 0 0 0.2rem;
        font-size: 0.32rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      p:nth-child(2)
        margin: 0.4rem 0 0 1.8rem;
        font-size: 0.2rem;
        color: #616161;
      p:nth-child(3)
        margin: 0.3rem 0 0 0.2rem;
        position: relative;
        span:nth-child(1)
          color: $price-color;
        span:nth-child(2)
          color: $price-color;
          font-size: 0.5rem;
        span:nth-child(3)
           color: #616161;
        span:nth-child(4)
          color: #616161;
          position: absolute;
          right: 0.2rem;
          top: 0.2rem;
      p:nth-child(4)
        margin: 0.3rem 0 0.3rem 0.2rem;
        color: #f55;
        background: #fff9f9;

.all
  // display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0.8rem;
  background: #fff;
  // text-align: center;
  // line-height: 0.25rem;  // 垂直居中？？？
  color: #00afc7;
  font-size: 0.3rem;

.tags
  width: 0.9rem;
  height: 0.3rem;
  position: absolute;
  left: 0.2rem;
  top: 0;
</style>
