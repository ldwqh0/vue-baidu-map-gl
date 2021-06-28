<template>
  <div>
    <b-map :options="{ak:'1D1WSeVQVIKsYB9CfCFUpUHu5rXwBdjO'}"
           style="height: 500px"
           @mounted="seta" />
    <!--    <b-map :options="{ak:'1D1WSeVQVIKsYB9CfCFUpUHu5rXwBdjO'}" style="height: 500px" />-->
    <!--    <b-map :options="{ak:'1D1WSeVQVIKsYB9CfCFUpUHu5rXwBdjO'}" style="height: 500px" />-->
    <!--    <b-map :options="{ak:'1D1WSeVQVIKsYB9CfCFUpUHu5rXwBdjO'}" style="height: 500px" />-->
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import BMap from './lib/BMap'

  export default Vue.extend({
    components: {
      BMap
    },
    methods: {
      seta (map) {
        map.enableScrollWheelZoom()
      }
    }
  })
</script>
<style lang="less">
</style>
