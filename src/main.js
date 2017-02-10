import Vue from 'vue'
import VueRouter from 'vue-router'
import app from 'components/app.vue'

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

const root = new Vue({
  router: router,
  render: h => h(app)
})

root.$mount('#app')

