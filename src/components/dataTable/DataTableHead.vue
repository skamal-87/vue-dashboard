<template>
  <thead>
    <tr v-for="arr in columns">
      <td v-for="column in arr">{{ column }}</td>
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