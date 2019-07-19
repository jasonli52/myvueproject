<template>
  <div class="father">
    <p>我是父组件</p>
    <p>我儿子找到女朋友了,名字叫</p>
    <son @getname="deal"></son>
  </div>
</template>

<script>
// 1 引入子组件
import son from '@/views/son1.vue';
export default {
  data () {
    return {
      name: '父组件-jack',
      erxifuname: '??'
    }
  },
  methods: {
    deal (data) {
      this.erxifuname = data
    }
  },
  // 2组件注册
  components: {
    son
  }
}
</script>

<style lang='less' scoped>
</style>
