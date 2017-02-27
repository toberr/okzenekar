var index = r => require.ensure([], () => r(require('./pages/index.vue')), 'index');
var about = r => require.ensure([], () => r(require('./pages/about.vue')), 'rolunk');
var articleParty = r => require.ensure([], () => r(require('./pages/article-party.vue')), 'lakodalmas-zenekar');
var articleWedding = r => require.ensure([], () => r(require('./pages/article-wedding.vue')), 'zenekar-eskuvore');
var downloads = r => require.ensure([], () => r(require('./pages/downloads.vue')), 'letoltesek');
var gallery = r => require.ensure([], () => r(require('./pages/gallery.vue')), 'galeria');
var opinions = r => require.ensure([], () => r(require('./pages/opinions.vue')), 'video');
var partners = r => require.ensure([], () => r(require('./pages/partners.vue')), 'partnereink');
var repertoire = r => require.ensure([], () => r(require('./pages/repertoire.vue')), 'repertoar');
var video = r => require.ensure([], () => r(require('./pages/video.vue')), 'velemenyek');

var routes = [
  { 
    path: '/',
    component: index,
    data: {
      linkName: 'Főoldal',
      metaDesc: 'Ok Zenekar lakodalom party bál eksüvő Zenei kínálat kompromisszum nélkül!'
    }
  },
  { 
    path: '/rolunk',
    component: about,
    data: {
      linkName: 'Rólunk',
      metaDesc: 'Rólunk: Mi, a zenekar tagjai gyermekkorunk óta zenélünk, tízen éves korunk óta játszunk tánczenét. Mind ketten igazi hangszeres zenészek vagyunk. Hangszereink: szintetizátor, harmonika, szaxofon, klarinét. Hangszereink mellett énekhangunkkal is jól bánunk.'
    }
  }
  ,
  { 
    path: '/lakodalmas-zenekar',
    component: articleParty,
    data: {
      category: 'article',
      linkName: 'Lakodalmas Zenekar',
      metaDesc: 'Lakodalmas zenekar ismertető'
    }
  },
  { 
    path: '/zenekar-eskuvore',
    component: articleWedding,
    data: {
      category: 'article',
      linkName: 'Zenekar esküvőre',
      metaDesc: 'Zenekar esküvőre ismertető'
    }
  },
  { 
    path: '/letoltesek',
    component: downloads,
    data: {
      linkName: 'Letöltések',
      metaDesc: 'Zenék letöltése'
    }
  },
  { 
    path: '/galeria',
    component: gallery,
    data: {
      linkName: 'Galéria',
      metaDesc: 'Fótók a zenekar tagjairól, bulikról, rendezvényekről.'
    }
  },
  { 
    path: '/video',
    component: video,
    data: {
      linkName: 'Videó',
      metaDesc: 'Videóink'
    }
  },
  { 
    path: '/partnereink',
    component: partners,
    data: {
      linkName: 'Partnereink',
      metaDesc: 'Partnereink'
    }
  },
  { 
    path: '/repertoar',
    component: repertoire,
    data: {
      linkName: 'Repertoár',
      metaDesc: 'Repertoárunk'
    }
  },
  { 
    path: '/velemenyek',
    component: opinions,
    data: {
      linkName: 'Vélemények',
      metaDesc: 'Vélemények a zenekarról'
    }
  }
]

//console.log(routes);

module.exports = routes;