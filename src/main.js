import Vue from 'vue'
import VueRouter from 'vue-router'
import App from 'components/App.vue'

Vue.use(VueRouter)

const Base = { template: '<div>base</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/', component: Base },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
