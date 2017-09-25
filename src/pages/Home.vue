<template>
    <div id="home">
       <h1>{{ pageName }}</h1>
    </div>
</template>
    
<script>
export default {
  name: "home",
  data () {
    return {
        pageName: '我是首页'
    };
  }
}
</script>
    
<style lang="css" scoped>
    #home h1{
        color: hotpink;
    }
</style>