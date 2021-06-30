<template>
  <b-map style="height: 500px" @mounted="seta" />
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    methods: {
      seta (map: any) {
        map.enableScrollWheelZoom()
      }
    }
  })
</script>
<style lang="less">
</style>
