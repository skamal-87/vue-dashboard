<template>
  <div>
      <hr class="style18">
      <div class="col-6 col-md-4">
        <div class="form-group">
            <label for="multselect">Select Skills (ctrl+click for multi)</label>
            <hr class="style9">
            <select multiple class="form-control" id="multselect">
                <option v-for="(ea, index) in eaData.skillsMetricsPerAgent.metricsPerSkill" :key="index">{{index}}</option>
            </select>
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="form-group">
            <label for="timeFrame">Time Fame (enter a value from 1 to 1440):</label>
            <hr class="style9">
            <input
                type="number"
                id="timeFrame"
                class="form-control"
                v-model.lazy="apiSettings.timeFrame">
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="form-group">
            <label for="multselect">Select Agents (ctrl+click for multi)</label>
            <hr class="style9">
            <select multiple class="form-control" id="multselect">
                <option v-for="(ea, index) in eaData.skillsMetricsPerAgent" :key="index">{{index}}</option>
            </select>
        </div>
      </div>    
      
      </div>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        error: '',
        submitted: false,
        submitText: 'Submitted!',
        buttonText: 'Submit',
        apiSettings: {
            timeFrame: 1
        }
      }
    },
    computed: {
      ...mapGetters({
          eaData: 'engagementActivityData'
      })
    }
  }
  </script>
  <style scoped>
  .submitted {
    background-color: #FFA500;
    outline-color: #FFA500;
  }
  .nav-bar {
    position: absolute;
    width: 90px;
    height: 100%;
    padding-left: 5px;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0px;
    padding-top: 5px;
  }



  li {
    margin-bottom: 10px;
  }

  a {
    color: #00d1b2;
    text-decoration: none;
  }

  a:hover, a:hover > i {
    color: white;
  }

  i {
    width: 100%;
    color: #00d1b2;
    font-size: 25px;
    padding-top: 10px;
  }

  .hidden-nav {
    display: none;
  }
body{
  background-color: #f0f0f0;
  width: 700px;
  float: center;
}

hr.style9 {
	border-top: 1px dashed #8c8b8b;
	border-bottom: 1px dashed #fff;
}

hr.style18 { 
  height: 30px; 
  border-style: solid; 
  border-color: #8c8b8b; 
  border-width: 1px 0 0 0; 
  border-radius: 20px; 
} 
hr.style18:before { 
  display: block; 
  content: ""; 
  height: 30px; 
  margin-top: -31px; 
  border-style: solid; 
  border-color: #8c8b8b; 
  border-width: 0 0 1px 0; 
  border-radius: 20px; 
}

</style>