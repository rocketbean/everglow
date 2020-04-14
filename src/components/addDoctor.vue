<template>
  <q-dialog v-model="modal"  :content-style="{ width: 'auto' }" >
        <!-- <div >
          <div class="row flex-center"> -->
            <q-card class="my-card ">
                <q-card-section horizontal class = "">
                    <div class = "col " style = "min-height:420px;height:380px;" >
                        <q-tab-panels v-model = "tab" animated style = "height:100%;width:100%;" class = "bg-green-3">
                            <q-tab-panel name = "addDoctor" style = "height:100%;width:100%" >
                                <add-doctor-form/>
                            </q-tab-panel>
                        </q-tab-panels>
                    </div>
                    <q-card-actions class="bg-green-4 text-green-2" style = "padding:0;margin:0px;">
                        <q-tabs vertical v-model="tab" no-caps stretch style="align-items:center;margin:0px;padding:0px" >
                            <q-tab default name="addDoctor"  icon="far fa-id-card" style = "height:25%;display:flex;flex-direction:column;align-items:center"/>
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
            return this.dialogs.addDoctor.open
        },
        set(v) {
            this._toggle('addDoctor')
        }
    }
  },
  data () {
    return {
      presetError: false,
      tab: 'addDoctor'
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