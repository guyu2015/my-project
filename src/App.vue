<template>
  <div>
  <router-view></router-view>
    <text-footer></text-footer></div>
</template>

<script>
  import footer from './components/footer/footer.vue'
export default {
 components : {
    'text-footer':footer
 }
}
</script>

<style>
  .active{
    color: red
  }

</style>
