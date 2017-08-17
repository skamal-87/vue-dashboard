<template>
  <div>
    <div class="row">
      <div class="col-sm-4 col-sm-offset-4">
      <h1>API Settings</h1>
      <hr>
      <div class="form-group">
          <label for="account">Account Number</label>
          <input
            type="text"
            id="account"
            class="form-control input-sm"
            placeholder="Enter your Account"
            v-model.lazy="accountData.account">
      </div>
      <div class="form-group">
        <label for="apiKey">API Key</label>
        <input
          type="text"
          id="apiKey"
          class="form-control input-sm"
          placeholder="Enter your API Key"
          v-model.lazy="accountData.apiKey">
      </div>
      <div class="form-group">
        <label for="secret">Secret</label>
        <input
          type="password"
          id="secret"
          class="form-control input-sm"
          placeholder="Enter your Secret"
          v-model.lazy="accountData.secret">
      </div>
      <div class="form-group">
        <label for="accessToken">Access Token</label>
        <input
          type="text"
          id="accessToken"
          class="form-control input-sm"
          placeholder="Enter your Access Token"
          v-model.lazy="accountData.accessToken">
      </div>
      <div class="form-group">
        <label for="accessSecret">Access Secret</label>
        <input
          type="password"
          id="accessSecret"
          class="form-control input-sm"
          placeholder="Enter your Access Secret"
          v-model.lazy="accountData.accessSecret">
      </div>
    </div>
  </div>
      <button class="btn btn-primary" v-if="matched" @click="submit()">{{submitted ? submitText : buttonText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
  	//you don't have to use props like I did with this.model, you could read from a vuex getter
    this.accountData  = JSON.parse(JSON.stringify(this.$store.getters.userAuthBody.userKeys))
  },
    data() {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        error: '',
        submitted: false,
        submitText: 'Submitted!',
        buttonText: 'Submit',
        accountData: {
            account: '',
            apiKey: '',
            secret: '',
            accessToken: '',
            accessSecret: ''
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
    },
    computed: {
  	  matched: function() {
    	  return this.$route.path.indexOf('/login') == 0;
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