<template>
  <div>
      <label for="loginApi"><h2>Log In</h2></label>
      <app-switch v-model="usingKeys"></app-switch>
      <transition name ="slide" mode="out-in">
        <div v-show="!usingKeys">
          <app-login-display></app-login-display>
          <div class="alert alert-danger" v-if="error">
            <p>{{ error }}</p>
          </div>
        </div>

        </transition>
        <transition name ="slide">
          <div v-show="usingKeys">
            <app-keys-display></app-keys-display>
          </div>
        </transition>
</div>
</template>

  <script>
  import Switch from '../../other/Switch.vue'
  import LoginDisplay from '../settings/LoginDisplay.vue'
  import KeysDisplay from '../settings/KeysDisplay.vue'
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
        usingKeys: true
      }
    },
    components: {
        appSwitch: Switch,
        appLoginDisplay: LoginDisplay,
        appKeysDisplay: KeysDisplay
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