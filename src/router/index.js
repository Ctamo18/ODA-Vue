import { createRouter, createWebHashHistory } from 'vue-router'
import ClientView from '../components/PersonneView.vue'
import produitView from '../components/TachesView.vue'
import ProjetView from '../components/ProjetView.vue'
const routes = [
  {
    path: '/client',
    name:"clientView",
    component: ClientView
  },
  {
    path: '/produit',
    name:"produitView",
    component: produitView
  },
  
  {
    path:'/projet',
    name:'projetViews',
    component:ProjetView
  }
   
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
