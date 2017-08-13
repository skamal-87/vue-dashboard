<template>
  <div class="nav-bar">
    <ul>
      <li v-for="nav in navOptions" class="card" :class="{ 'sub-nav hidden-nav': nav.subMenu }">
        <a @click="showNavMenuItems" v-if="nav.subMenuParent">
          <i class="glyphicon glyphicon-cog" :class="nav.icon"></i>
          {{ nav.title }}
        </a>
        <router-link :to="nav.url" v-if="!nav.subMenuParent">
          <i class="glyphicon glyphicon-cog" :class="nav.icon"></i>
          {{ nav.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data: () => {
      return {
        navOptions: [
          {
            title: 'Chat',
            url: '/',
            icon: 'glyphicon-comment',
            subMenu: false,
            subMenuParent: false
          },
          {
            title: 'Messaging',
            url: '/',
            icon: 'glyphicon-phone',
            subMenu: false,
            subMenuParent: false
          },
          {
            title: 'Chat Menu',
            url: '#',
            icon: 'glyphicon-menu-hamburger',
            subMenu: false,
            subMenuParent: true
          },
          {
            title: 'Agent Activity',
            url: '/agentActivityDashboard',
            icon: 'glyphicon-list-alt',
            subMenu: true,
            subMenuParent: false
          },
          {
            title: 'Current Queue State',
            url: '/currentQueue',
            icon: 'glyphicon-list-alt',
            subMenu: true,
            subMenuParent: false
          },
          {
            title: 'Engagement Activity',
            url: '/engagementActivityDashboard',
            icon: 'glyphicon-list-alt',
            subMenu: true,
            subMenuParent: false
          },
          {
            title: 'Queue Health',
            url: '/queueHealthDashboard',
            icon: 'glyphicon-list-alt',
            subMenu: true,
            subMenuParent: false
          },
          {
            title: 'SLA',
            url: '/slaDashboard',
            icon: 'glyphicon-list-alt',
            subMenu: true,
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
        $('.sub-nav').toggleClass('hidden-nav');
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
