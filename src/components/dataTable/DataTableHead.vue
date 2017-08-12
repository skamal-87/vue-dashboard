<template>
  <thead>
    <tr>
      <td v-for="column in columns">{{ column }}</td>
    </tr>
  </thead>
</template>

<script>
  export default {
    name: 'DataTableHead',
    props: ['columns']
  }
</script>

<style scoped>
  thead {
    color: #00d1b2;
  }
</style>