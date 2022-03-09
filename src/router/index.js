import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nav from '@/components/Nav.vue'
import Today from '../views/Today.vue'
import Schedule from '../views/Schedule.vue'
import Booking from '../views/Booking.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      Nav: Nav
    }
  },
  {
    path: '/today',
    component: Today,
    components: {
      default: Today,
      Nav
    }
  },
  {
    path: '/schedule',
    name: 'Schedule',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Schedule,
    components: {
      default: Schedule,
      Nav
    }
  },
  {
    path: '/Booking',
    components: {
      default: Booking,
      Nav
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
