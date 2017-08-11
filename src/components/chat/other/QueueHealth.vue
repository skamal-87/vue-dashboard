<template>
  <section>
    <section class="card-non-interactive">
      <div class="row widget-title">
        Queue Health
        <hr>
      </div>
      <div class="row">
        <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
          <thead>
            <tr>
              <th>Skill ID</th>
              <th>Avg. Time To Ans.</th>
              <th>Total Time To Ans.</th>
              <th>Avg. Time To Abandon</th>
              <th>Total Time To Abandon</th>
              <th>Abandon Rate</th>

              <th>Entered Queue</th>
              <th>Abandoned Chats</th>
              <th>Connected</th>
              <th>Max Queue Size</th>
              <th>Min Queue Size</th>
              <th>Avg. Queue Size</th>
              <th>Current Queue Size</th>
              <th>Queue Size Sum</th>
              <th>Queue Size Count</th>
              <th>Current Avail. Slots</th>
              <th>Max Avail. Slots</th>
              <th>Min Avail. Slots</th>
              <th>Avg. Avail. Slots</th>
              <th>Avail. Sum</th>
              <th>Avail. Count</th>
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
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Garrett Winters</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>63</td>
              <td>2011/07/25</td>
              <td>$170,750</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Ashton Cox</td>
              <td>Junior Technical Author</td>
              <td>San Francisco</td>
              <td>66</td>
              <td>2009/01/12</td>
              <td>$86,000</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'QueueHealth',
    mounted: () => {
      $('#example').DataTable({
        responsive: true,
        "scrollX": true
      });
    }
  }
</script>

<style scoped>
  .table-striped>tbody>tr:nth-of-type(odd) {
    background-color: transparent;
  }

  .card-non-interactive {
    padding-top: 20px;
    margin: 20px 25px;
  }

  thead {
    color: #00d1b2;
  }
</style>