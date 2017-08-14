<template>
  <div>
          <div class="col-sm-4 col-sm-offset-4">
            <label for="loginApi"><h2>Log In</h2></label>
            <app-switch v-model="loginApi"></app-switch>
    <transition name ="slide" mode="out-in">
        <div v-if="loginApi">
                <h1>LiveEngage Authentication </h1>
                <hr>
                <p>Input your LiveEngage credentials to access your dashboard!</p>
                <div class="alert alert-danger" v-if="error">
                    <p>{{ error }}</p>
                </div>
                <div class="form-group">
                    <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your username"
                    v-model="credentials.username"
                    >
                </div>
                <div class="form-group">
                    <input
                    type="password"
                    class="form-control"
                    placeholder="Enter your password"
                    v-model="credentials.password"
                    >
                </div>
                <button class="btn btn-primary" @click="submit()">Access</button>
                <p>{{checkCred}}</p>
        
        </div>
            <div v-else>
                    <app-login-keys></app-login-keys>
            </div>
    </transition>

    </div>
</div>
</template>

  <script>
  import Switch from '../other/Switch.vue'
  import LoginKeys from './LoginKeys.vue'
  import auth from '../auth'
  export default {
    data() {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        credentials: {
          username: '',
          password: ''
        },
        error: '',
        loginApi: true
      }
    },
    methods: {
      submit() {
        var credentials = {
          username: this.credentials.username,
          password: this.credentials.password,
          loginApi: this.loginApi
        }
        // We need to pass the component's this context
        // to properly make use of http in the auth service
       this.$store.dispatch('leAuth', credentials)
       this.username = ''
       this.password = ''
      }
    },
    computed: {
        checkCred () {
            return this.$store.getters.userCredentials;
          }
        },
    components: {
        appSwitch: Switch,
        appLoginKeys: LoginKeys
    }

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

  .slide-enter-active{
    animation: slide-in 200ms ease-out forwards;
  }
  .slide-leave-active{
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from{
      transform: translateY(-30px);
      opacity: 0;
    }
    to{
      transform: translateY(0);
      opacity: 1;
    }
  }

    @keyframes slide-out {
    from{
      transform: translateY(0px);
      opacity: 1;
    }
    to{
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>