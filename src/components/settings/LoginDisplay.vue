<template>
  <div>
    <div class="col-sm-4 col-sm-offset-4">
        <h1>LiveEngage Authentication </h1>
        <hr>
        <p>Input your LiveEngage credentials to access your dashboard!</p>
        <div class="form-group">
          <input
          type="text"
          class="form-control input-sm"
          placeholder="Enter your Account Number"
          v-model="credentials.accountNumber"
          />
        </div>
        <div class="form-group">
          <input
          type="text"
          class="form-control input-sm"
          placeholder="Enter your username"
          v-model="credentials.userName"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control input-sm"
            placeholder="Enter your password"
            v-model="credentials.password"
          />
        </div>
        <button class="btn btn-primary" v-if="matched" @click="postPost()">Submit!</button>
        <br>
        <br>
        <div class="alert alert-danger" v-if="error">
          <strong>Login Error!</strong> {{errorMessage.response.data.error.error}}
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
  export default {
    mounted() {
  	//you don't have to use props like I did with this.model, you could read from a vuex getter
    this.credentials = JSON.parse(JSON.stringify(this.$store.getters.userAuthBody.userCredentials))
  },
    data() {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        submitted: false,
        submitText: 'Submitted!',
        buttonText: 'Submit',
        credentials: {
          userName: '',
          password: '',
          accountNumber: '',
          bearer: ''
        },
        error: false,
        errorMessage: '',
        loginApi: true
      }
    },
    computed: {
  	matched: function() {
    	return this.$route.path.indexOf('/login') == 0;
      }
    },
    methods: {
      submit() {

      },
      postPost() {
        console.log(this.credentials)
        axios.post(`http://localhost:3000/api/v1/getBearerToken`, 
        this.credentials,
          {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          this.credentials.bearer = response.data.data
          var credentials = {
            userName: this.credentials.userName,
            password: this.credentials.password,
            loginApi: this.loginApi,
            accountNumber: this.credentials.accountNumber,
            bearer: this.credentials.bearer
          }
          this.$store.dispatch('leAuth', credentials)
          this.$router.push('/')
        })
        .catch(e => {
          this.error = true
          this.errorMessage = e
        })
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