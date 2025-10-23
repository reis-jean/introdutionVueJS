import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamsList from '../components/teams/TeamsList.vue'
import UsersList from '../components/users/UsersList.vue'
import TeamMembers from '@/components/teams/TeamMembers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/teams',
      name: 'teams',
      component: TeamsList,
    },
    {
      path: '/users',
      name: 'users',
      component: UsersList,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/teams/:teamId',      
      component: TeamMembers,
    },
    {
      path: '/teams/new',      
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],

})

export default router
