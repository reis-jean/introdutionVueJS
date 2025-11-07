import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamsList from '../components/teams/TeamsList.vue'
import UsersList from '../components/users/UsersList.vue'
import TeamMembers from '@/components/teams/TeamMembers.vue'
import NotFound from '@/components/nav/NotFound.vue'
import TeamFooter from '@/components/teams/TeamFooter.vue'
import UsersFooter from '@/components/users/UsersFooter.vue'

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
      components:{
        default: TeamsList,
        footer: TeamFooter
      },
      alias: '/',
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    
    },
    {
      path: '/users',
      name: 'users',
      components:{
        default: UsersList,
        footer: UsersFooter
      },
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
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
  scrollBehavior(to, from, savedPosition){
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }

})

export default router
