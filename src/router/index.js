import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowArticle from '../views/articles/Show.vue'
import CreateArticle from '../views/articles/Create.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/articles/:id',
    name: 'ShowArticle',
    component: ShowArticle,
    props: true // untuk get data di url seperti id,slug
  },
  {
    path: '/articles/create',
    name: 'CreateArticle',
    component: CreateArticle
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
