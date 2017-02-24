var index = r => require.ensure([], () => r(require('./pages/index.vue')), 'index');
var about = r => require.ensure([], () => r(require('./pages/about.vue')), 'about');
var articleParty = r => require.ensure([], () => r(require('./pages/article-party.vue')), 'article-party');
var articleWedding = r => require.ensure([], () => r(require('./pages/article-wedding.vue')), 'article-wedding');
var downloads = r => require.ensure([], () => r(require('./pages/downloads.vue')), 'downloads');
var gallery = r => require.ensure([], () => r(require('./pages/gallery.vue')), 'gallery');
var opinions = r => require.ensure([], () => r(require('./pages/opinions.vue')), 'opinions');
var partners = r => require.ensure([], () => r(require('./pages/partners.vue')), 'partners');
var repertoire = r => require.ensure([], () => r(require('./pages/repertoire.vue')), 'repertoire');
var video = r => require.ensure([], () => r(require('./pages/video.vue')), 'video');

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
    path: '/about',
    component: about,
    data: {
      linkName: 'Rólunk',
      metaDesc: 'Rólunk: Mi, a zenekar tagjai gyermekkorunk óta zenélünk, tízen éves korunk óta játszunk tánczenét. Mind ketten igazi hangszeres zenészek vagyunk. Hangszereink: szintetizátor, harmonika, szaxofon, klarinét. Hangszereink mellett énekhangunkkal is jól bánunk.'
    }
  }
  ,
  { 
    path: '/article-party',
    component: articleParty,
    data: {
      category: 'article',
      linkName: 'Lakodalmas Zenekar',
      metaDesc: 'Lakodalmas zenekar ismertető'
    }
  },
  { 
    path: '/article-wedding',
    component: articleWedding,
    data: {
      category: 'article',
      linkName: 'Zenekar esküvőre',
      metaDesc: 'Zenekar esküvőre ismertető'
    }
  },
  { 
    path: '/downloads',
    component: downloads,
    data: {
      linkName: 'Letöltések',
      metaDesc: 'Zenék letöltése'
    }
  },
  { 
    path: '/gallery',
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
    path: '/partners',
    component: partners,
    data: {
      linkName: 'Partnereink',
      metaDesc: 'Partnereink'
    }
  },
  { 
    path: '/repertoire',
    component: repertoire,
    data: {
      linkName: 'Repertoár',
      metaDesc: 'Repertoárunk'
    }
  },
  { 
    path: '/opinions',
    component: opinions,
    data: {
      linkName: 'Vélemények',
      metaDesc: 'Vélemények a zenekarról'
    }
  }
]

//console.log(routes);

module.exports = routes;