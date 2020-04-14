import Vue from 'vue'
import axios from 'axios'
import singularity from '../assets/singularity'
import session from '../assets/session'
import store from '../store/index'

store()._actions._auth[0](false)
window.$existence = false;
Vue.prototype.$_s = new singularity;
Vue.prototype.$_sessionHandler = new session;
Vue.prototype.$axios = new axios.create({
    baseURL: "http://localhost:8000/api/",
});
if(Vue.prototype.$_s.verify()) {
    Vue.prototype.$existence = true
    window.$existence = true;
    Vue.prototype.$axios.defaults.headers.common['Authorization'] =Vue.prototype.$_s.load();
} else Vue.prototype.$existence = false

async function authenticator () {
    await store()._actions._auth[0](true)
}