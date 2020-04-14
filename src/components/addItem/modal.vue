<template>
  <q-dialog v-model="modal"  :content-style="{ width: 'auto' }" >

  <q-card class="my-card " style = "width:405px; padding:10px">
    <span class = "text-h6 text-grey q-pa-sm">
      <q-icon name="fas fa-store-alt" />
      Add items to shop
    </span>
    <div class = "q-pa-md">
      <q-input bottom-slots v-model="item.name" label="Name"  color = "green-8" outlined filled autofocus :loading="loadState" :disable="loadState"/>
      <q-input bottom-slots v-model="item.description" autogrow label="Description"  color = "green-8" outlined filled autofocus :loading="loadState" :disable="loadState"/>
      <q-input bottom-slots v-model="item.price" label="Price"  color = "green-8" outlined filled autofocus :loading="loadState" :disable="loadState"/>
    </div>
    <q-card-actions style = "display:flex; justify-content:flex-end">
      <q-btn flat round color = "green-8" icon = "fas fa-plus" @click = "addItem" />
    </q-card-actions>
  </q-card>

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
    },
    shop () {
      return this.active.shop;
    }
  },
  data () {
    return {
      loadState: false,
      item: {
        name: '',
        description: '',
        price: 0
      }
    }
  },
  methods: {
    ...mapActions(['_modal']),
    addItem () {
      this.$axios.post(`shop/${this.shop.id}/item`, this.item).then(r=> {
        console.log(r)
      })
    }
  }
}
</script>