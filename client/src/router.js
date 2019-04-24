import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store/store';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: "about" */ './views/Login.vue'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import( /* webpackChunkName: "about" */ './views/Register.vue'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import( /* webpackChunkName: "about" */ './views/Profile.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // go to login
      next('/login')
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      next('/profile')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;