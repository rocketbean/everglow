<template>
  <q-dialog v-model="modal"  :content-style="{ width: 'auto' }" >
    
  </q-dialog>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['active', 'dialogs']),
    modal : {
        get () {
            return this.dialogs.items.add.open
        },
        set(v) {
            this._modal({object: 'items', modal: 'add'})
        }
    }
  },
  data () {
    return {
      item: {
        name: '',
        description: '',
        price: 0
      }
    }
  }
}
</script>