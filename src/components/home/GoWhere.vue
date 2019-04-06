<template>
  <div class="go-where">
    <div>周末去哪儿</div>
    <ul>
      <li v-for="item in goWhereList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
        <p>{{ item.title }}</p>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeGoWhere',
  props: ['goWhereList']
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/var.styl'

.go-where
  width: 100%;
  background: #fff;
  margin-top: 0.2rem;
  font-size: 0.2rem;
  div
    box-sizing: border-box;
    background: #f5f5f5;
    padding: 0 0 0.2rem 0.2rem;
    font-size: 0.3rem;
  ul li
    height: 4rem;
    img
      width: 100%;
      height: 2.75rem;
    p:nth-child(2)
      margin: 0.2rem 0 0 0.2rem;
      font-size: 0.25rem;
    p:nth-child(3)
      margin: 0.2rem 0 0 0.2rem;
      font-size: 0.22rem;
      color: #616161;
      // white-space: nowrap;
      // overflow: hidden;
      // text-overflow: ellipsis;
      textOverflow();
</style>
