<template>
  <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
    <DataTableHead :columns="columns"></DataTableHead>
    <DataTableBody :data="data"></DataTableBody>
  </table>
</template>

<script>
  import DataTableHead from './DataTableHead.vue';
  import DataTableBody from './DataTableBody.vue';

  export default {
    name: 'DataTable',
    components: {
      DataTableHead,
      DataTableBody
    },
    props: ['columns', 'data'],
    mounted: () => {
      $('#example').DataTable({
        responsive: true,
        "scrollX": true,
        "order": [[ 0, "desc" ]]
      });
    }
  }
</script>
