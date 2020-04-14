export const shops_ = (state, payload) => {
  let  s = state.shops.find(_s => _s.id === payload.id) 
  if(!s) state.shops.push(payload)
  else s = payload
}