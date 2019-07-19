<template>
  <div id="app">
    <p>这是根组件</p>
    <!-- 9.添加超链接 -->
    <router-link to='/index'>首页</router-link> &nbsp;&nbsp;&nbsp;
    <router-link to='/login'>登陆页</router-link> &nbsp;&nbsp;&nbsp;
    <router-link to='/product/1'>水果</router-link> &nbsp;&nbsp;&nbsp;
    <router-link to='/product/2'>电器</router-link> &nbsp;&nbsp;&nbsp;
    <router-link to='/product/3'>服装</router-link> &nbsp;&nbsp;&nbsp;
    <!-- 8.添加路由映射的组件的展示区域：路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="less">
</style>
