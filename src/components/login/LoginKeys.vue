<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>API Settings</h1>
      <hr>
      <div class="form-group">
          <label for="account">Account Number</label>
          <input
            type="text"
            id="account"
            class="form-control"
            v-model.lazy="accountData.account">
      </div>
      <div class="form-group">
        <label for="apiKey">API Key</label>
        <input
          type="text"
          id="apiKey"
          class="form-control"
          v-model.lazy="accountData.apiKey">
      </div>
      <div class="form-group">
        <label for="secret">Secret</label>
        <input
          type="password"
          id="secret"
          class="form-control"
          v-model.lazy="accountData.secret">
      </div>
      <div class="form-group">
        <label for="accessToken">Access Token</label>
        <input
          type="text"
          id="accessToken"
          class="form-control"
          v-model.lazy="accountData.accessToken">
      </div>
      <div class="form-group">
        <label for="accessSecret">Access Secret</label>
        <input
          type="password"
          id="accessSecret"
          class="form-control"
          v-model.lazy="accountData.accessSecret">
      </div>
    </div>
  </div>
      <button class="btn btn-primary" @click="submit()">Access</button>
      <p>{{checkKeys}}</p>
      </div>
    </div>
  </div>
</template>

  <script>
  import auth from '../../auth'
  export default {
    data() {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        error: '',
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
        checkKeys () {
            return this.$store.getters.userKeys;
          }
        },

  }
  </script>
  <style scoped>
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