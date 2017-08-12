<template>
  <tbody>
    <tr>
      <td v-for="value in data">{{ value }}</td>
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
