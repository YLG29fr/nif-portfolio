import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import NotFound from './pages/404.vue'
import Projects from './pages/Projects.vue'

const routes = [
    { path: '/',name: 'HomePage', component: Home },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    
    { path: '/projet', name: 'ProjectsIndex', component: Projects },
    { path: '/projet/:name', name: 'Project', component: Projects },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
