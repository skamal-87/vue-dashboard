<template>
  <div class="nav-bar">
    <ul>
      <li class="card">
        <router-link to="/">
          <i class="glyphicon glyphicon-comment"></i>
          Dashboard
        </router-link>
      </li>
      <li class="card">
        <a href="#">
          <i class="glyphicon glyphicon-phone"></i>
          Dashboard
        </a>
      </li>
      <li class="card">
        <a href="#" @click="showNavMenuItems">
          <i class="glyphicon glyphicon-menu-hamburger"></i>
          Menu
        </a>
      </li>
      <li class="card" :class="{ 'show-nav': hideOtherDashboards }">
        <router-link to="/queueHealthDashboard">
          <i class="glyphicon glyphicon-list-alt"></i>
          Queue Health
        </router-link>
      </li>
      <li class="card">
        <a href="#">
          <i class="glyphicon glyphicon-book"></i>
          Glossary
        </a>
      </li>
      <li class="card">
        <a href="#">
          <i class="glyphicon glyphicon-cog"></i>
          Settings
        </a>
      </li>
      <li class="card">
        <a href="#">
          <i class="glyphicon glyphicon-question-sign"></i>
          Help
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data: () => {
      return {
        hideOtherDashboards: true
      }
    },
    methods: {
      showNavMenuItems() {
        this.hideOtherDashboards = !this.hideOtherDashboards;
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    position: fixed;
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

  .show-nav {
    display: none;
  }
</style>