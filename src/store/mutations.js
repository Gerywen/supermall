import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'
const mutations = {
  [ADD_COUNTER](state,info){
    info.count++
  },
  [ADD_TO_CART](state,info) {
    info.checked = true
    state.cartList.push(info)
  }
}

export default mutations

