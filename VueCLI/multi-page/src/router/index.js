import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamsList from '../components/teams/TeamsList.vue'
import UsersList from '../components/users/UsersList.vue'
import TeamMembers from '@/components/teams/TeamMembers.vue'
import NotFound from '@/components/nav/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   redirect: '/teams',
    // },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsList,
      alias: '/'
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
      props: true
    },
    {
      path: '/teams/new',      
      component: HomeView,
    },
    {
      path: '/:notFound(.*)',      
      component: NotFound
    },
    {
      path: '/about',
      name: 'about',      
      component: () => import('../views/AboutView.vue'),
    },
  ],

})

export default router
