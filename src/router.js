import index from './pages/index.vue'
import about from './pages/about.vue'
import contact from './pages/contact.vue'


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

export default routes