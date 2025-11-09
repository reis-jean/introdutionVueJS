import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamsList from '../pages/TeamsList.vue'
import UsersList from '../pages/UsersList.vue'
import TeamMembers from '@/components/teams/TeamMembers.vue'
import NotFound from '@/components/nav/NotFound.vue'
import TeamFooter from '@/pages/TeamFooter.vue'
import UsersFooter from '@/pages/UsersFooter.vue'

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
      meta: {
        needsAuth: true
        // A propriedade meta é um objeto de metadados que você pode adicionar a qualquer rota.
        // Para que serve?
        // ✅ Controlar autenticação
        // ✅ Controlar autorização (permissões → admin, editor, usuário)
        // ✅ Definir título da página
        // ✅ Definir layout (ex.: layout público, layout privado)
        // ✅ Ativar/desativar animações
        // ✅ Exibir ou esconder navbar/footer
        // ✅ Sinalizar que a rota é “sensível” e precisa de validação
        // ✅ Carregar dados condicionais
        // ✅ Sinalizar que a rota é “sensível” e precisa de validação
        // 'Ou seja: meta é o lugar onde você guarda regras e configurações da rota.
      },
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
      beforeEnter(to, from, next){
        console.log('Navigation to:', to.fullPath);
        console.log('Navigation from:', from.fullPath);
        next();
        // Ele funciona de forma parecida com o beforeEach, mas só é executado quando a rota em que ele está definido for acessada.
        // Ele é útil para executar lógica específica para uma rota, como verificar se o usuário está logado, etc.
        // Quando usar beforeEnter?
        // Use quando:
        // ✅ A lógica só faz sentido para uma rota específica
        // ✅ Você não quer que o guard seja executado em outras rotas
        // ✅ Precisa proteger ou preparar apenas aquela parte da aplicação
          //Resumo simples

          // beforeEach: roda sempre, em todas as rotas

          // beforeEnter: roda só para UMA rota

          // beforeRouteEnter: dentro do componente, roda quando o componente é carregado
      }
      , beforeRouteEnter(to, from, next){
        console.log('Navigation to:', to.fullPath);
        console.log('Navigation from:', from.fullPath);
        next();
        // Ele é executado dentro do componente, roda quando o componente é carregado
      }
      , beforeRouteUpdate(to, from, next){
        console.log('Navigation to:', to.fullPath);
        console.log('Navigation from:', from.fullPath);
        next();
        // Ele é executado dentro do componente, roda quando o componente é atualizado
      },
      beforeRouteLeave(to, from, next){
        console.log('Navigation to:', to.fullPath);
        console.log('Navigation from:', from.fullPath);
        next();
        // Ele é executado dentro do componente, roda quando o componente é deixado
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
  scrollBehavior(_, _2, savedPosition){
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  console.log('Navigation to:', to.fullPath);
  console.log('Navigation from:', from.fullPath);

    // if (to.meta.needsAuth && !store.state.isLoggedIn) {
    //   return next('/teams');
    //   //usando meta para controlar autenticação
    //   // Se a rota precisa de autenticação e o usuário não está logado, redireciona para a rota de login

    // }

  next();

  //   uma função que é executada antes de qualquer navegação entre rotas acontecer.

  // Ele serve para interceptar a navegação e permitir que você:

  // ✅ Controle o acesso a rotas (ex.: proteger páginas que exigem login)
  // ✅ Executar lógica antes da rota carregar
  // ✅ Cancelar a navegação
  // ✅ Redirecionar para outra rota
  // ✅ Carregar dados, validar permissões, verificar estados
  // ✅ Adicionar logs ou analytics de navegação
});

router.afterEach((to, from) => {
  console.log('Navigation to:', to.fullPath);
  console.log('Navigation from:', from.fullPath);
  // Ele é executado depois de qualquer navegação entre rotas acontecer.

  // Ele serve para executar lógica após a navegação, como:

  // ✅ Adicionar analytics de navegação
  // ✅ Executar lógica de tracking
  // ✅ Atualizar o estado da aplicação
  // ✅ Executar lógica de cleanup
});

router.beforeResolve((to, from, next) => {
  console.log('Navigation to:', to.fullPath);
  console.log('Navigation from:', from.fullPath);
  next();
  // Ele é executado antes de qualquer navegação entre rotas acontecer.

  // Ele serve para executar lógica antes de qualquer navegação entre rotas acontecer, como:

  // ✅ Adicionar analytics de navegação
  // ✅ Executar lógica de tracking
  // ✅ Atualizar o estado da aplicação
  // ✅ Executar lógica de cleanup
}); 

// after Resolve não existe no Vue Router 4.5.1
// router.afterResolve((to, from) => {
//   console.log('Navigation to:', to.fullPath);
//   console.log('Navigation from:', from.fullPath);
//   // Ele é executado depois de qualquer navegação entre rotas acontecer.

//   // Ele serve para executar lógica após a navegação, como:

//   // ✅ Adicionar analytics de navegação
//   // ✅ Executar lógica de tracking
//   // ✅ Atualizar o estado da aplicação
//   // ✅ Executar lógica de cleanup
// });

// Ordem de execução dos guards globais

// A ordem completa quando o usuário navega é:

// 1️⃣ beforeEach (global)
// 2️⃣ beforeEnter (da rota)
// 3️⃣ beforeRouteEnter (do componente)
// 4️⃣ beforeResolve (global)
// 5️⃣ ✅ ROTA CONFIRMADA
// 6️⃣ beforeRouteLeave (da rota anterior)
// 7️⃣ beforeRouteUpdate (se for o mesmo componente)
// 8️⃣ afterEach (global)
// 9️⃣ mounted() do componente novo

// Essa ordem é MUITO usada para entender por que algo está travando a navegação.

export default router
