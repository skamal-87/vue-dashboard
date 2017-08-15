<template>
  <div>
        <p>The Settings Component</p>
        <div v-show="usingKeys"> 
            <app-keys-display></app-keys-display>
        </div>
        <div v-show="!usingKeys"> 
            <app-login-display></app-login-display>
        </div> 
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import KeysDisplay from './KeysDisplay.vue'
import LoginDisplay from './LoginDisplay.vue'
  export default {
    computed: {
        ...mapGetters({
            usingKeys: 'usingKeys'
        })
    },
    data() {
      return {

      }
    },
    components: {
        appKeysDisplay: KeysDisplay,
        appLoginDisplay: LoginDisplay
    },
    methods: {
      submit() {
        var credentials = {

        }
      }
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

</style>