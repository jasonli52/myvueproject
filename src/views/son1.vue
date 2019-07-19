<template>
  <div class="son">
    <p>这是子组件:{{name}}</p>
    <input type="button" :value="'点击告诉我老爸他的儿媳妇的名字叫'+mygname" @click="tellname" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '子组件-小jack',
      mygname: '小乔'
    }
  },
  methods: {
    tellname () {
      // 发射事件
      this.$emit('getname', this.mygname)
    }
  }
}
</script>

<style lang='less' scoped>
</style>
