<template>
<div class="container">
  <div class="row">
    <div>
      <div v-show="usingKeys.usingKeys"> 
        <app-keys-display></app-keys-display>
      </div>
      <div v-show="!usingKeys.usingKeys"> 
        <app-login-display></app-login-display>
      </div>
    </div>
    <div class="col-6 col-md-4"></div>
  </div>
  <br>
  <div class="row">
    <app-switch v-model="usingKeys.usingKeys"></app-switch>
  </div>
  <br>
  <div class="row">
    <app-global-settings></app-global-settings>
  </div>
      

  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import KeysDisplay from './KeysDisplay.vue'
import LoginDisplay from './LoginDisplay.vue'
import GlobalSettings from './GlobalSettings.vue'
import Switch from '../../other/Switch.vue'
  export default {
    computed: {
        ...mapGetters({
            usingKeys: 'userAuthBody'
        })
    },
    data() {
      return {

      }
    },
    components: {
        appKeysDisplay: KeysDisplay,
        appLoginDisplay: LoginDisplay,
        appGlobalSettings: GlobalSettings,
        appSwitch: Switch
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