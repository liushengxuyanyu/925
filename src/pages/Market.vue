<template>
    <div id="market">
       <h1>{{ pageName }}</h1>
    </div>
</template>
    
<script>
export default {
  name: "market",
  data () {
    return {
        pageName: '我是闪送超市'
    };
  }
}
</script>
    
<style lang="css" scoped>
    #market h1{
        color: skyblue;
    }
</style>