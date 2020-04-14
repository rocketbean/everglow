<template>
    <q-page class = "q-pa-lg">
      <add-item />
      <div class="">
        <div class="q-gutter-md row items-start">
          <profile-header  :shop ="shop" :loadState="loadState" :panel="setPanel"/>
          <q-tab-panels v-model="tab" animated class="bg-primary text-white">
            <q-tab-panel name="mails">
              <div class="text-h6">Mails</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="movies">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </q-page>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['active']),
    shop: {
      get () {
        return this.active.shop;
      },
      set(v) {
        this.active.shop = v
      }
    },
  },
  data() {
    return {
      tab: 'mails',
      loadState: true
    }
  },
  methods: {
    setPanel (v) {
      this.tab = v
    }
  },
  mounted() {
    let shopId = this.$route.params.index
    this.$axios.get(`shop/${shopId}`).then(r => {
      console.log(r)
      this.loadState = false
      this.shop = r.data
    })
  }
}
</script>