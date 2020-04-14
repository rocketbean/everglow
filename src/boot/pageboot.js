// import something here
import particles from 'particles.js'
import moment from 'vue-moment'
import GlobalEvents from 'vue-global-events'
import VueParticles from 'vue-particles'

import login from 'src/components/login'
import addDoctor from 'src/components/addDoctor'
import addDoctorForm from 'src/components/parts/addDoctorForm'


import loginForm from 'src/components/parts/loginForm'
import register from 'src/components/parts/register'
import facebook from 'src/components/parts/facebook'
import google from 'src/components/parts/google'
import landing from 'src/pages/landing/landing'
import services from 'src/pages/services/services'
import itemCard from 'src/pages/services/card'

import leftDrawer from 'src/pages/dashboard/left-drawer'
import rightDrawer from 'src/pages/dashboard/right-drawer'
import drawerMain from 'src/pages/dashboard/main-right'
import drawerDoctor from 'src/pages/doctors/right-drawer'
import drawerShop from 'src/pages/shops/right-drawer'

import addShop from 'src/components/addShop'
import shopCard from 'src/pages/shops/card/index'

import profileHeader from 'src/pages/shops/profile/header'
import addItem from 'src/components/addItem/modal'
import itemDrawer from 'src/pages/shops/items/item-drawer'


// "async" is optional
export default async ({ app, router, Vue }) => {
  //shop
  Vue.component('profile-header', profileHeader)
  Vue.component('add-item', addItem)
  Vue.component('item-drawer', itemDrawer)
  
  //shops
  Vue.component('drawer-shop', drawerShop)
  Vue.component('add-shop', addShop)
  Vue.component('shop-card', shopCard)

  Vue.component('left-drawer', leftDrawer)
  Vue.component('right-drawer', rightDrawer)
  Vue.component('drawer-main', drawerMain)
  Vue.component('drawer-doctor', drawerDoctor)
  Vue.component('add-doctor', addDoctor)
  Vue.component('add-doctor-form', addDoctorForm)
  
  // something to do

  Vue.component('login', login)
  Vue.component('login', login)
  Vue.component('loginForm', loginForm)
  Vue.component('register', register)
  Vue.component('facebook', facebook)
  Vue.component('google', google)

  Vue.component('landing', landing)
  Vue.component('services', services)
  Vue.component('item-card', itemCard)

  Vue.prototype.$hosted = 'http://localhost:3000/';
  Vue.use(moment)
  Vue.use(VueParticles)
  Vue.component('GlobalEvents', GlobalEvents);
  Vue.config.keyCodes = {
    digit1: 49,
    digit2: 50,
    digit3: 51,
    digit4: 52,
    digit5: 53,
    digit6: 54,
    digit7: 55,
    digit8: 56,
    digit9: 57,
    digit0: 48,
  }
}
