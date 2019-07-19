<template>
    <div class="son">
        <p>这是子组件</p>
        <p>我的父亲给我取名叫:{{myname}}</p>
    </div>
</template>
<script>
export default {
  // props:允许外部进行赋值,使用的时候就和data中定义的成员一样使用
  props: ['myname'],
  data () {
    return {
    //   myname: '??'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
