<template>
    <div id="Two">
       <h2>{{ pageName }}</h2>
    </div>
</template>
    
<script>
export default {
  name: "two",
  data () {
    return {
        pageName: '我是Mine组件内的Two组件'
    };
  }
}
</script>
    
<style lang="css" scoped>
    #two h2{
        color: saddlebrown;
    }
</style>