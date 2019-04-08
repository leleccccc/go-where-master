let defaultCity = '杭州'
if (localStorage.city) {
  defaultCity = localStorage.city
} else {
  defaultCity = '杭州'
}

const state = {
  city: defaultCity
}

export default state
