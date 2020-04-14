import Vue from 'vue'
import Vuex from 'vuex'
export const strict = false

// import example from './module-example'

Vue.use(Vuex)
import dialogs from './dialogs'
import active from './active'
import shops from './shops'
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      dialogs,
      active,
      shops
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    // process.env.DEV
    strict: false
  })

  return Store
}
