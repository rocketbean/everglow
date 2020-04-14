<template>
  <q-list padding>
    <q-item clickable v-ripple @click = "toggle('createShop')">
      <q-item-section avatar>
        <q-icon name="fas fa-plus-circle" />
      </q-item-section>

      <q-item-section>
        Create your shop
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  
  computed: {
    ...mapGetters(['dialogs']),

  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(['_modal']),
    toggle (d) {
      this._modal({object: 'shops', modal: 'add'})
    }
  }

}
</script>