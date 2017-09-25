<template>
    <div id="cart">
       <h1>{{ pageName }}</h1>
    </div>
</template>
    
<script>
export default {
  name: "cart",
  data () {
    return {
        pageName: '我是购物车'
    };
  }
}
</script>
    
<style lang="css" scoped>
    #cart h1{
        color: green;
    }
</style>