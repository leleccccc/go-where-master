<!-- <template>
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
</template>

<script>
export default {
  name: 'CityAllCity',
  props: ['allCityList']
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/var.styl"

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
</style> -->
