import store from '../store/index'

function guard (to, from, next) {
  if(!$existence) {
    if(to.path !== "/login") next("login");
    else next()
  } else {
    if(to.path === "/login") next('app/dashboard');
    else next()
  }
}


const routes = [
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    beforeEnter: guard,
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/app',
    component: () => import('layouts/adminLayout.vue'),
    beforeEnter: guard,
    children: [
      { name: 'dashboard', path: 'dashboard', component: () => import('pages/dashboard.vue') },
      { name: 'doctors', path: 'doctors', component: () => import('pages/doctors/doctors.vue') },
      { name: 'shops', path: 'shops', component: () => import('pages/shops/shop.vue') },
      { name: 'shop', path: 'shop/:index', component: () => import('pages/shops/profile/profile.vue') },
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
