<template>
  <table :id="tableID" class="table table-striped table-bordered" cellspacing="0" width="100%">
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
    props: {
      columns: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      tableID: {
        type: String,
        required: false,
        default: 'example'
      }
    },
    mounted() {
      $('#' + this.tableID).DataTable({
        responsive: true,
        "scrollX": true,
        "order": [[ 0, "desc" ]]
      });
    }
  }
</script>

<style>
  .dataTables_paginate {
    margin-top: 5px !important;
  }
</style>