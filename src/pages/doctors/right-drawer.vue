<template>
  <q-list padding>
    <q-item clickable v-ripple @click = "toggle('addDoctor')">
      <q-item-section avatar>
        <q-icon name="fas fa-plus-circle" />
      </q-item-section>

      <q-item-section>
        Add a Doctor
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  computed: {

  },
  methods: {
    ...mapActions(['_toggle']),
    toggle (d) {
      this._toggle(d)
    }
  }
}
</script>