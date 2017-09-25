<template>
    <div id="mine">
       <h1>{{ pageName }}</h1>
       <br />
       <!-- 注意二级路由的写法，要把之前路由的地址带上 -->
       <router-link to="/mine/one">One</router-link>
       <router-link to="/mine/two">Two</router-link>
       <router-view></router-view>
    </div>
</template>
    
<script>
export default {
  name: "mine",
  data () {
    return {
        pageName: '我是我的'
    };
  }
}
</script>
    
<style lang="css" scoped>
    #mine h1{
        color: orange;
    }
</style>