import { createRouter, createWebHistory } from 'vue-router'


let routes : any[] = []

function lazyRoute(pathRoute : string, pathName : string, viewName : string) {
   routes.push( { path: pathRoute, name: pathName, component: () => import(`../views/${viewName}.vue`) } ) 
}

lazyRoute('/', 'home', 'HomeView')
lazyRoute('/about', 'about', 'AboutView')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
