<template>
  <div class="father">
    <p>这是父组件:{{name}}</p>
    <p>今儿个很高兴,我儿子找到女朋友了,名字叫:{{erxifuname}}</p>
    <!-- 监听子组件发射的事件 -->
    <son @getname="deal"></son>
  </div>
</template>
<script>
// 1.引入子组件
import son from '@/views/son.vue1';
export default {
  data () {
    return {
      name: '父组件-jack',
      erxifuname: '??'
    }
  },
  methods: {
    //   事件处理函数有一个默认的参数,这个参数就是事件发射时所传递的数据
    deal (data) {
      console.log(data)
      this.erxifuname = data
    }
  },
  // 2.组件注册
  components: {
    son
  }
}
</script>
<style lang="less" scoped>
</style>
