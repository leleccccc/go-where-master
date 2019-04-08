const mutations = {
  changeCity (state, CityName) { // 接受一个载荷(形参)
    localStorage.city = CityName
    state.city = CityName
  }
}

export default mutations
