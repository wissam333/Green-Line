import { createRouter, createWebHistory } from 'vue-router'
import SignView from '../views/SignView.vue'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import PaymentsView from '../views/PaymentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SignView',
      component: SignView
    },
    {
      path: '/HomeView',
      name: 'HomeView',
      component: HomeView,
      children: [
        {
          path: 'ProductsView',
          component: ProductsView
        },
        {
          path: 'PaymentsView',
          component: PaymentsView
        }
      ]
    }
  ]
})

export default router
