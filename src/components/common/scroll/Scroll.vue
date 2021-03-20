<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from "@better-scroll/core";
  // 解决better-scroll无法滚动的问题
  // CSDN地址:https://blog.csdn.net/qq_36882279/article/details/114910120
  import ObserveDOM from "@better-scroll/observe-dom";
  // 解决没有PullUp方法的问题
  import PullUp from "@better-scroll/pull-up"
  BScroll.use(ObserveDOM);
  BScroll.use(PullUp)
	export default {
		name: "Scroll",
    props: {
		  probeType: {
		    type: Number,
        default: 1
      },
      data: {
		    type: Array,
        default: () => {
          return []
        }
      },
      pullUpLoad: {
		    type: Boolean,
        default: false
      }
    },
    data() {
		  return {
		    scroll: {}
      }
    },
    mounted() {
		  setTimeout(this.__initScroll, 20)
    },
    methods: {
		  __initScroll() {
		    // 1.初始化BScroll对象
		    if (!this.$refs.wrapper) return
        this.scroll = new BScroll(this.$refs.wrapper, {
          ObserveDOM: true,
          probeType: this.probeType,
          click: true,
          pullUpLoad: this.pullUpLoad
        })

        // 2.将监听事件回调
        this.scroll.on('scroll', pos => {
          this.$emit('scroll', pos)
        })

        // 3.监听上拉到底部
        if (this.pullUpLoad) {
          this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
          })
        }
        // this.scroll.on('pullingUp', () => {
        //   console.log('上拉加载');
        //   this.$emit('pullingUp')
        // })
      },
      refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      },
      finishPullUp() {
		    this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
      },
      scrollTo(x, y, time) {
		    this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      }
    },
    watch: {
		  data() {
        setTimeout(this.refresh, 20)
      }
    }
	}
</script>

<style scoped>

</style>
