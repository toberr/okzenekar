var index = r => require.ensure([], () => r(require('./pages/index.vue')), 'index')
var about = r => require.ensure([], () => r(require('./pages/about.vue')), 'about')
var contact = r => require.ensure([], () => r(require('./pages/contact.vue')), 'contact')

var routes = [
  { 
    path: '/',
    component: index,
    name: 'index',
  },
  { 
    path: '/about',
    component: about,
    name: 'about'

  },
  { 
    path: '/contact',
    component: contact,
    name: 'contact'
  }
]

//console.log(routes);

module.exports = routes