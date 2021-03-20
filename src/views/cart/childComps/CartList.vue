<template>
    <scroll>
      <div>
        <cart-list-item v-for="(item,index) in cartLists" :key="index" :item-info="item"></cart-list-item>
      </div>
    </scroll>
</template>

<script>
import CartListItem from "@/views/cart/childComps/CartListItem";
import Scroll from "@/components/common/scroll/Scroll";

import { mapGetters } from 'vuex'
export default {
  name: "CartList",
  components:{
    Scroll,
    CartListItem
  },
  props:{
    cartLists: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed:{
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>

</style>
