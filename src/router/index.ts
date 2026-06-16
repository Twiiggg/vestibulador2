import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'


let routes : RouteRecordRaw[] = []

function lazyRoute(pathRoute : string, pathName : string, viewName : string) {
   routes.push( { path: pathRoute, name: pathName, component: () => import(`../views/${viewName}.vue`) } ) 
}

lazyRoute('/', 'home', 'HomeView')
lazyRoute('/about', 'about', 'AboutView')
lazyRoute('/provaRequest', 'provaRequest', 'ProvaRequest')
lazyRoute('/provaList', 'provaList', 'ProvaList')
lazyRoute('/prova', 'prova', 'Prova')
lazyRoute('/history', 'history', 'History')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
