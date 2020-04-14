export default class singularity {
  verify () {
  try {
    return JSON.parse(atob(localStorage.getItem("_c")))
  } catch {
    return false
  }
  }
  load () {
      let _t = JSON.parse(atob(localStorage.getItem("_c")))
      return 'Bearer ' + _t._t
  }
create (_t) {
      console.log("Creating token")
  localStorage.setItem("_c", this.encodeSingularity({
    _t
  }))
  }
  authenticate(inst, r) {
      inst.$existence = true
      this.create(r.plainTextToken)
      inst.$axios.defaults.headers.common['Authorization'] = r.plainTextToken;
  }
encodeSingularity (_s) {
  return btoa(JSON.stringify(_s))
}
}