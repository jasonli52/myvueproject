<template>
  <div class="product">
    <p>这是产品页</p>
    <p>{{typeinfo}}</p>
    <input type="button" value="单击查看详情" @click='jump'>
    <!-- 设置嵌套路由所映射组件的展示区域 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      typeinfo: '',
      id: ''
    }
  },
  methods: {
    jump () {
      if (this.id === '1') {
        this.$router.push({ name: 'shui' })
      } else if (this.id === '2') {
        this.$router.push({ name: 'dian' })
      } else if (this.id === '3') {
        this.$router.push({ name: 'fu' })
      }
    }
  },
  watch: {
    // 只有路由参数变化的时候才会触发
    // 下面这个监听是响应同一个路由的参数变化
    $route (to, from) {
      // 对路由变化作出响应...
    //   console.log(to)
    //   console.log(from)
      this.id = to.params.id
      //   console.log(id)
      if (this.id === '1') {
        this.typeinfo = '这是水果分类的信息'
      } else if (this.id === '2') {
        this.typeinfo = '这是电器分类的信息'
      } else if (this.id === '3') {
        this.typeinfo = '这是服装分类的信息'
      }
    }
  },
  // 当组件加载之后就立刻进行参数的获取
  //   原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用
  //   下面这个钩子函数:是响应路由变化
  mounted () {
    //   this.$route:可以获取路由参数对象，里面有属性可以获取参数
    // params:通过router-link进行路由的跳转就通过params来获取
    // query:
    console.log(this.$route)
    this.id = this.$route.params.id
    if (this.id === '1') {
      this.typeinfo = '这是水果分类的信息'
    } else if (this.id === '2') {
      this.typeinfo = '这是电器分类的信息'
    } else if (this.id === '3') {
      this.typeinfo = '这是服装分类的信息'
    }
  }
}
</script>
<style lang="less" scoped>
</style>
