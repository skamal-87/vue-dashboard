<template>
  <div>
      <h3>API Settings</h3>
      <hr>
      <div class="form-group">
          <label for="timeFrame">Time Fame (enter a value from 1 to 1440):</label>
          <input
            type="number"
            id="timeFrame"
            class="form-control"
            v-model.lazy="apiSettings.timeFrame">
      </div>
    </div>
</template>

<script>
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
    methods: {
      submit() {
        var apiKeys = {
          // change this to accountData details
            account: this.accountData.account,
            apiKey: this.accountData.apiKey,
            secret: this.accountData.secret,
            accessToken: this.accountData.accessToken,
            accessSecret: this.accountData.accessSecret
        }       
          this.$store.dispatch('keysAuth', apiKeys)
          this.$router.push('/')
          this.submitted = true
          this.accountData.account = ''
          this.accountData.apiKey = ''
          this.accountData.secret = ''
          this.accountData.accessToken = ''
          this.accountData.accessSecret = ''
        // We need to pass the component's this context
        // to properly make use of http in the auth service
        
      }
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
</style>