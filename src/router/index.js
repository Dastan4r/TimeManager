import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home';
import Login from '../components/auth/Login';
import Registration from '../components/auth/Registration';
import User from '../components/User';
import CreateTaskForm from "../components/Tasks/CreateTaskForm";
import TeamPage from "../components/Navbar/TeamPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login,
      },
      {
        path: '/registration',
        name: 'registration',
        component: Registration
      }
    ]
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    children: [
      {
        path: '/user/:id/create',
        name:'create-task',
        component: CreateTaskForm
      }
    ]
  },
  {
    path: '/team',
    name: 'our-team',
    component: TeamPage
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
