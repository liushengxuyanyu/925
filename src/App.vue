<template>
<!-- 这里的div会把index.html中的div覆盖掉 -->
  <div id="app">
    <!-- <h1>我是app.vu中的H1</h1>
    <img src="./assets/logo.png">
    <m></m> -->
    <!-- <home></home> -->
    <!-- 使用router-link组件（标签）进行路由分发 -->
    <!-- 这里的to对应的就是路由规则配置的path -->
    <div class="tabbar">
      <router-link to="/home">首页1111</router-link>
      <router-link to="/market">闪送超市1111</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/mine">我的</router-link>
    </div>
    <!-- 使用router-view组件（标签）进行组件显示 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 导入Hello组件
import Hello from './components/Hello'
// import Home from './pages/Home'

// 这个是ES6的模块导出语法，导出的是一个对象，以后在每个.vue文件（组件）中都会有这样一个导出，方便
// 其他模块依赖使用
export default {
  // 这个是组件的名字
  name: 'app',
  // 这个组件所依赖的其他子组件
  components: {
    // Hello: Hello
    // 上面的组件名字 对应这里  key名字，忽略大小写
    m: Hello,
    // Home
  }
}
</script>

<!-- scoped 表示样式，只在这个组件中使用 -->
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* h1{
  color: red;
} */

/* tabbar样式 */
#app .tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  background-color: wheat;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

#app .tabbar a{
  color: blue;
}

</style>
