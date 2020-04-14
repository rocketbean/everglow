<template >
    <q-page class = "q-pa-md">
    <add-shop/>
      <div class = "row q-gutter-md" >
        <shop-card :shop="shop" :key="k" v-for = "(shop, k) in shops" class = "col-3"/>
      </div>
    </q-page>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters(['shops'])
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['_shops']),
    getShopList () {
      this.$axios.get('/shop').then(r => {
        r.data.map(shop => this._shops(shop))
      })
    }
  },
  mounted () {
    this.getShopList()
  }
}
</script>