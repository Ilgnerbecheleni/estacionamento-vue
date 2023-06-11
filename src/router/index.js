import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView.vue'
import VeiculoView from '../views/VeiculoView.vue'
import LoginView from '../views/LoginView.vue'
import { isAuthenticated } from '../utils/authGuard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PrincipalView,
  
    },
    {
      path: '/veiculo',
      name: 'veiculo',
      component: VeiculoView,
      meta: {
        requiresAuth: true // Define a propriedade meta "requiresAuth" para indicar que a rota requer autenticação
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
     
    },
    {
      path: '/cliente',
      name: 'cliente',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClienteView.vue')
    },
   
 
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    // Se a rota requer autenticação e o usuário não estiver autenticado, redirecione para a página de login ou qualquer outra ação apropriada
    next('/login'); // Redireciona para a página de login, por exemplo
  } else {
    next(); // Continue para a próxima rota
  }
});

export default router
