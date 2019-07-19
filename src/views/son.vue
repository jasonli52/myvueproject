<template>
    <div class="son">
        <p>这是子组件:{{name}}</p>
        <input type="button" :value="'点击告诉我老爸他的儿媳妇的名字叫'+mygfname" @click='tellname'>
    </div>
</template>
<script>
export default {
  data () {
    return {
      name: '子组件-小jack',
      mygfname: '小红'
    }
  },
  methods: {
    tellname () {
      // 发射事件:通过this.$emit(事件名称,需要传递的数据)
      this.$emit('getname', this.mygfname)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
