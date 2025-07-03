import { createRouter, createWebHistory } from 'vue-router'
import { DEPLOY_CONFIG } from './deploy.config'

import Home from './pages/Home.vue'
import NotFound from './pages/404.vue'
import Index from './pages/projects/Index.vue'

import PageGemenyApp from './pages/projects/PageGemenyApp.vue'
// import PageGemenyAuth from './pages/projects/PageGemenyAuth.vue'
// import PagePortfolio from './pages/projects/PagePortfolio.vue'



const routes = [
    { path: '/',name: 'HomePage', component: Home },
    
    { path: '/projets/:any?', name: 'ProjectsList', component: Index },

    { path: '/projet/portfolio', name: 'PagePortfolio', component: Index },
    { path: '/projet/gemeny-app', name: 'PageGemenyApp', component: PageGemenyApp },
    { path: '/projet/gemeny-auth', name: 'PageGemenyAuth', component: Index },

    { path: '/projet/:name?', name: 'ProjectNotFound', component: Index },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    // selon l'hébergeur, le chemin peut varier
    history: createWebHistory( DEPLOY_CONFIG.base ),
    routes,
    scrollBehavior() {
        
            return { top: 0}
        
    }

})

export default router
