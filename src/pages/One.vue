<template>
    <div id="One">
       <h2>{{ pageName }}</h2>
    </div>
</template>
    
<script>
export default {
  name: "one",
  data () {
    return {
        pageName: '我是Mine组件内的One组件'
    };
  }
}
</script>
    
<style lang="css" scoped>
    #one h2{
        color: orange;
    }
</style>