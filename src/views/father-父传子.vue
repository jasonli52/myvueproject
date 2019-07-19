<template>
    <div class="father">
        <p>这是父组件:{{name}}</p>
        <input type="text" v-model="mysonname">
        <p>我给我的儿子取名叫:{{mysonname}}</p>
        <hr>
        <!-- 3.使用组件就像使用标签 -->
        <!-- 在父组件中使用子组件的位置 ,通过v-bind为子组件props中的成员赋值 -->
        <son :myname='mysonname'></son>
    </div>
</template>
<script>
// 1.引入子组件
import son from '@/views/son.vue'
export default {
  data () {
    return {
      name: 'jack',
      mysonname: '王二狗'
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
