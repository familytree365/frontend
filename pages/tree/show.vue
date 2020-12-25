<template>
  <main>
    <Chart />
    <div id="panel" style="height:300px;"/>
  </main>

</template>
<script src="https://cdn.jsdelivr.net/npm/d3-dag@0.3.5/dist/d3-dag.min.js"></script>
<script>
import Chart from '@/components/Chart'
import * as d3 from 'd3';
export default {
  name: 'app',
  components: {
    Chart
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>