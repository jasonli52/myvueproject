import Vue from 'vue'
import App from './App.vue'

// 0.引入组件
// @:就代表src目录
import Index from '@/views/index.vue'
import Login from '@/views/login.vue'
import Product from '@/views/product.vue'
import Shui from '@/views/shui.vue'
import Dian from '@/views/dian.vue'
import Fu from '@/views/fu.vue'
// 1.引入
import VueRouter from 'vue-router'
// 2.使用:让Vue使用VueRouter进行路由管理
Vue.use(VueRouter)

Vue.config.productionTip = false
// 3.创建路由对象
var router = new VueRouter({
  // 4.配置路由
  routes: [
    // 5.配置单击路由对象：路由映射组件
    // component：路由所映射的组件对象
    {
      // /index >> index
      name: 'index',
      path: '/index',
      component: Index
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'product',
      // id相当于形参，它不会影响你传什么值，但是会决定后期如何获取参数
      path: '/product/:id',
      component: Product,
      // 添加它的嵌套路由
      children: [
        // 里面是一个一个的对象,每个对象描述一个单独的路由配置
        {
          name: 'shui',
          // 添加/的路由都是根路由--一级路由
          // 嵌套路由不要添加/
          path: 'shui',
          component: Shui
        },
        {
          name: 'dian',
          path: 'dian',
          component: Dian
        },
        {
          name: 'fu',
          path: 'fu',
          component: Fu
        }
      ]
    }
  ]
})

new Vue({
  // 6.注入
  // 记得要通过 router 配置参数注入路由，从而让整个应用都有路由功能
  router,
  render: h => h(App)
}).$mount('#app')
