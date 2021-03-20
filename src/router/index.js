import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Dashboard/Home.vue'
import Students from '../components/Dashboard/Students.vue'
import CreateStudent from '../components/Dashboard/CreateStudent'
import EditStudent from '../components/Dashboard/EditStudent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/students',
    name: 'Students',
    component: Students
  },
  {
    path: '/createStudent',
    name: 'CreateStudent',
    component: CreateStudent
  },
  {
    path: '/editStudent',
    name: 'EditStudent',
    component: EditStudent
  },
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes
})

export default router
