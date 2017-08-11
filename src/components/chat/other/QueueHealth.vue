<template>
  <section class="card-non-interactive">
    <div class="row widget-title">
      Queue Health
      <hr>
    </div>
    <div class="row">
      <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'QueueHealth',
    mounted: function () {
      $('#example').DataTable();
    }
  }
</script>

<style scoped>
  .table-striped>tbody>tr:nth-of-type(odd) {
    background-color: transparent;
  }

  .card-non-interactive {
    padding-top: 20px;
    margin-left: 25px;
    margin-right: 25px;
  }
</style>