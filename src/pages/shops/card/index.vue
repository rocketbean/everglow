<template>
    <q-card class="my-card">
      <q-img :src="shop.avatar">
        <div class="absolute-bottom">
          <div class="text-h6">{{shop.name}}</div>
          <div class="text-subtitle2">{{shop.description}}</div>
        </div>
      </q-img>

      <q-card-actions class = "flex " style ="justify-content:flex-end">
        <q-btn flat>Action 1</q-btn>
        <q-btn flat icon = "fas fa-pen-square"/>
        <q-btn flat icon = "fas fa-forward" @click = "routeTo(shop)"/>
      </q-card-actions>
    </q-card>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  props: ['shop'],
  methods: {
    ...mapActions(['_activateShop']),
    routeTo(shop) {
      // if(this.$route.name !== name)
      this._activateShop(shop)
       this.$router.push({ name: 'shop', params: { index: shop.id } })
    }
  }
}
</script>