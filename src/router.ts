import { createRouter, createWebHistory } from 'vue-router'
import { DEPLOY_CONFIG } from './deploy.config'

import Home from './pages/Home.vue'
import NotFound from './pages/404.vue'
import Index from './pages/projects/Index.vue'
import LegalMentions from './pages/LegalMentions.vue'

import PageGemenyApp from './pages/projects/PageGemenyApp.vue'
import PageGemenyAuth from './pages/projects/PageGemenyAuth.vue'
import PagePortfolio from './pages/projects/PagePortfolio.vue'
// import PageEQonnect from './pages/projects/PageEQonnect.vue'

import EQonnectPOC from './eQonnect/EQonnect-page.vue'



const routes = [
    { path: '/',name: 'HomePage', component: Home },
    
    { path: '/projet/portfolio', name: 'PagePortfolio', component: PagePortfolio },
    { path: '/projet/gemeny-app', name: 'PageGemenyApp', component: PageGemenyApp },
    { path: '/projet/gemeny-auth', name: 'PageGemenyAuth', component: PageGemenyAuth },
    // { path: '/projet/eQonnect', name: 'PageEQonnect', component: PageEQonnect },
    
    { path: '/projets/:any?', name: 'ProjectsList', component: Index },
    { path: '/projet/:name?', name: 'ProjectNotFound', component: Index },

    { path: '/mentions', name: 'MentionsLegales', component: LegalMentions },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

    { path: '/EQonnect', name: 'EQonnect-POC', component: EQonnectPOC },
    { path: '/EQonnect/:any?', name: 'EQonnect-POC', component: EQonnectPOC },

]

const router = createRouter({
    // Seulement scroll en haut pour les changements de route (pas les ancres)
    history: createWebHistory( DEPLOY_CONFIG.base ),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.path !== from.path) {
            return { top: 0 }
        }
         // Pour les ancres sur la même page (Firefox/Chrome), laisser le navigateur gérer
        return false
    }

})

export default router
