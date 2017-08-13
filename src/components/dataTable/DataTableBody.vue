<template>
  <tbody>
    <tr v-for="arr in data">
      <td v-for="value in arr">{{ value }}</td>
    </tr>
  </tbody>
</template>

<script>
  export default {
    name: 'DataTableBody',
    props: ['data']
  }
</script>

<style scoped>
  .table-striped>tbody>tr:nth-of-type(odd) {
    background-color: transparent;
  }
</style>
