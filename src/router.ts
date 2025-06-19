import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import NotFound from './pages/404.vue'
import Index from './pages/projects/Index.vue'

import PageGemenyApp from './pages/projects/PageGemenyApp.vue'
import PageGemenyAuth from './pages/projects/PageGemenyAuth.vue'
import PagePortfolio from './pages/projects/PagePortfolio.vue'



const routes = [
    { path: '/',name: 'HomePage', component: Home },
    
    { path: '/projets', name: 'ProjectsList', component: Index },

    { path: '/projets/portfolio', name: 'PagePortfolio', component: PagePortfolio },
    { path: '/projets/gemeny-app', name: 'PageGemenyApp', component: PageGemenyApp },
    { path: '/projets/gemeny-auth', name: 'PageGemenyAuth', component: PageGemenyAuth },

    { path: '/projets/:name?', name: 'ProjectNotFound', component: Index },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
