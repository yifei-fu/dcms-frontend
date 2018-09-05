import Vue from 'vue'
import Router from 'vue-router'

import PostList from './components/PostList.vue'
import PostView from './views/PostView.vue'
import Home from './views/Home.vue'
import PageNotFound from './views/PageNotFound.vue'

Vue.use(Router)

var routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/category/:category',
    name: 'category',
    component: PostList,
    props: (route) => ({query: {category: route.params.category}, header: `Category: ${route.params.category}`})
  },{
    path: '/tag/:tag',
    name: 'tag',
    component: PostList,
    props: (route) => ({query: {tag: route.params.tag}, header: `Tag: ${route.params.tag}`})
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostView
  },
  // 404 view
  {
    path: "*",
    component: PageNotFound
  }
]

var navbar_routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  }
]

export { routes, navbar_routes }
export default new Router(
  {
    routes,
    mode: 'hash'
  })
