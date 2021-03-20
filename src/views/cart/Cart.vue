<template>
  <div id="cart">
    <!--导航-->
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartCount}})</div></nav-bar>
    <!--列表-->
    <cart-list class="cart-list" :cart-lists="cartList"></cart-list>
    <!--底部汇总-->
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/childComps/CartList";
import Scroll from "@/components/common/scroll/Scroll";

import { mapGetters } from 'vuex'
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    Scroll
  },
  computed: {
    ...mapGetters([
      'cartCount',
      'cartList'
    ])
  }
};
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-high-text);
    color: #fff;
  }
  #cart {
    height: 100vh;
  }
  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }
</style>
