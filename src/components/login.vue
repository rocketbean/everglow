<template>
  <q-dialog v-model="modal"  :content-style="{ width: 'auto' }" >
        <!-- <div >
          <div class="row flex-center"> -->
            <q-card class="my-card ">
                <q-card-section horizontal class = "">
                    <div class = "col " style = "min-height:420px;height:380px;" >
                        <q-tab-panels v-model = "tab" animated style = "height:100%;width:100%;" class = "bg-green-3">
                            <q-tab-panel name = "login" style = "height:100%;width:100%;margin:0px;padding:0px;overflow:hidden!important" >
                                <loginForm :presetError="toggleError" />
                            </q-tab-panel>
                            <q-tab-panel name = "register" style = "height:100%;width:100%" >
                                <register/>
                            </q-tab-panel>
                            <q-tab-panel name = "facebook" style = "height:100%;width:100%">
                                <facebook/>
                            </q-tab-panel>
                            <q-tab-panel name = "google" style = "height:100%;width:100%" >
                                <google/>
                            </q-tab-panel>
                        </q-tab-panels>
                    </div>
                    <q-card-actions class="bg-green-4 text-green-2" style = "padding:0;margin:0px;">
                        <q-tabs vertical v-model="tab" no-caps stretch style="align-items:center;margin:0px;padding:0px" >
                            <q-tab name="login" icon = "far fa-user" style = "height:25%;display:flex;flex-direction:column;align-items:center;margin:0px;padding:0px;"/>
                            <q-tab name="register"  icon="far fa-id-card" style = "height:25%;display:flex;flex-direction:column;align-items:center"/>
                            <q-tab name="facebook"  icon="fab fa-facebook-f" style = "height:25%;display:flex;flex-direction:column;align-items:center"/>
                            <q-tab name="google"  icon="fab fa-google" style = "height:25%;display:flex;flex-direction:column;align-items:center"/>
                        </q-tabs>
                    </q-card-actions>
                </q-card-section>
            </q-card>
          <!-- </div>
        </div> -->
  </q-dialog>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['dialogs']),
    modal : {
        get () {
            return this.dialogs.login.open
        },
        set() {
            this._toggle('login')
        }
    }
  },
  data () {
    return {
      presetError: false,
      tab: 'login'
    }
  },
  methods: {
    ...mapActions(['_toggle']),
    toggleError() {
        this.presetError = true
    },
  }
}
</script>