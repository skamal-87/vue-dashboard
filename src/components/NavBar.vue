<template>
  <div class="nav-bar">
    <ul>
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

      <li v-for="nav in navOptions" class="card">
        <a href="#" @click="showNavMenuItems" v-if="nav.subMenuParent">
        <router-link :to="nav.url">
          <i class="glyphicon glyphicon-cog" :class="nav.icon"></i>
          {{ nav.title }}
        </router-link>
        </a v-if="nav.subMenuParent">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data: () => {
      return {
        hideOtherDashboards: true,
        navOptions: [
          {
            title: 'Dashboard',
            url: '/',
            icon: 'glyphicon-comment',
            subMenu: false,
            subMenuParent: false
          },
          {
            title: 'Dashboard',
            url: '/',
            icon: 'glyphicon-phone',
            subMenu: false,
            subMenuParent: false
          },
          {
            title: 'Glossary',
            url: '/',
            icon: 'glyphicon-book',
            subMenu: false,
            subMenuParent: false
          },
          {
            title: 'Settings',
            url: '/',
            icon: 'glyphicon-cog',
            subMenu: false,
            subMenuParent: false
          },
          {
            title: 'Help',
            url: '/',
            icon: 'glyphicon-question-sign',
            subMenu: false,
            subMenuParent: false
          }
        ]
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