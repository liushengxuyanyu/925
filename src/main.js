// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// ES6的模块导入语法，from 后面跟着是要导入的模块名字，只是省略.js .vu等尾缀。
// import 后面跟着是一个变量名字（随便叫），这个变量存储着要导入的模块所导出的内容
import Vue from 'vue'
import App from './App'

// 导入路由模块
import VueRouter from 'vue-router'

// 全局安装路由 (让任何组件都可以使用路由)
Vue.use(VueRouter);

// 分别导入4个组件
import Home from './pages/Home'
import Market from './pages/Market'
import Cart from './pages/Cart'
import Mine from './pages/Mine'

// 在导入2个组件
import One from './pages/One'
import Two from './pages/Two'

// 配置路由规则
const routes = [
  { path: '', component: Home },
  { path: '/home', component: Home },
  { path: '/market', component: Market },
  { path: '/cart', component: Cart },
  { path: '/mine', component: Mine, children: [
      { path: '', component: One },
      { path: 'one', component: One },
      { path: 'two', component: Two }
  ]}
]

// 创建路由实例
const router = new VueRouter({
  // 路由规则
  routes
})


// 去掉控制台警告
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  // 记得要将路由实例挂载到vue上
  router
})
