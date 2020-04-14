export function _auth ({commit}, payload) {
  return commit('auth_', payload)
}

export function _activateShop ({commit}, payload) {
  return commit('activateShop_', payload)
}
