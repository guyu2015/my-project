<template>
 <div>
   <text-header></text-header>
    <router-view></router-view>
  </div>

</template>

<script>
  import header from './header.vue'
    export default{
        components : {
      "text-header":header
        }
    }
</script>

<style>

</style>
