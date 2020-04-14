import {mapGetters, mapActions} from 'vuex'
import defaults from "./defaults"
export default class session {
	loadSession () {
		try {
			return JSON.parse(atob(localStorage.getItem("_s")))
		} catch {
			return false
		}
	}
	create (user) {
		localStorage.setItem("_s", this.encodeSession({user}))
	}
	encodeSession (_s) {
		return btoa(JSON.stringify(_s))
	}
}