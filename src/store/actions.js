import {ADD_TO_CART,ADD_COUNTER} from "@/store/mutation-types";

const actions = {
  addCart(context, info) {
    // 1.查看是否添加过
    const oldInfo =context.state.cartList.find(item => item.iid === info.iid)

    // 2.+1或者新添加
    if (oldInfo) {
      // oldInfo.count += 1
      context.commit(ADD_COUNTER,oldInfo)
    } else {
      info.count = 1
      context.commit(ADD_TO_CART,info)
      info.checked = true
    }
  }
}

export default actions

