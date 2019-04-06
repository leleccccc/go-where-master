<!-- <template>
  <div class="city">
    <div>热门城市</div>
    <ul>
      <li v-for="item in hotCityList" :key="item.id">
        <a href="">{{ item.city }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityHotCity',
  props: ['hotCityList']
}
</script>

<style lang="stylus" scoped>
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
</style> -->
