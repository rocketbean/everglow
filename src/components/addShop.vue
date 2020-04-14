<template>
  <q-dialog v-model="modal"  :content-style="{ width: 'auto' }" >
  <q-card class="my-card " style = "width:405px; padding:10px">
    <span class = "text-h6 text-grey q-pa-sm">
      <q-icon name="fas fa-store-alt" />
      Create Your Shop
    </span>
    <div class = "q-pa-md">
      <q-input bottom-slots v-model="shop.name" label="Name"  color = "green-8" outlined filled autofocus :loading="loadState" :disable="loadState"/>
      <q-input  clearable type = "textarea" rows = "2"
       autogrow bottom-slots v-model="shop.description"
        label="please describe your shop..."  
        color = "green-8"
        outlined filled autofocus :loading="loadState" :disable="loadState"
       />
    </div>
    <q-card-actions style = "display:flex; justify-content:flex-end">
      <q-btn flat round color = "green-8" icon = "cancel" />
      <q-btn flat round color = "green-8" icon = "save" @click = "save" />
    </q-card-actions>
  </q-card>
  </q-dialog>
</template>
<script>
import {mapGetters, mapActions} from 'vuex' 
export default {
  computed: {
    ...mapGetters(['dialogs']),
    modal: {
      get() {
        return this.dialogs.shops.add.open
      },
      set (v) {
        this._modal({object: 'shops', modal: 'add'})
      }
    }
  },
  data () {
    return {
      loadState: false,
      shop: {
        name: '',
        avatar: 'https://cdn2.iconfinder.com/data/icons/real-estate-1-12/50/13-512.png',
        description: ''
      }
    } 
  },
  methods: {
    ...mapActions(['_modal']),
    toggle (d) {
      this._modal({object: 'shops', modal: 'add'})
    },
    save () {
      this.$axios.post('shop', this.shop).then(r => {
        console.log(r)
      })
    }
  }
  
}
</script>