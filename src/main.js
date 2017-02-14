require('es6-promise').polyfill();

import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './components/app.vue';
import routes from './router';
import eb from './components/event-bus';

Vue.use(VueRouter);
Vue.use(eb);

var router = new VueRouter({
  mode: 'history',
  routes: routes
});

var root = new Vue({
  router: router,
  render: h => h(app)
});

root.$mount('#app')

