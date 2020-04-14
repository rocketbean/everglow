<template>
      <q-drawer
        v-model="drawer"
        show-if-above
        @click="toggle()"
        :mini="miniState"
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-green-4"
        side="right" >
        <q-scroll-area class="fit text-green-8">
        <transition-group
          appear
          enter-active-class="animated slideInRight"
        >
          <!-- We wrap a "p" tag and a QBtn -->
          <drawer-main v-if="currentRoute === 'dashboard'" key ="main"/>
          <drawer-doctor v-if="currentRoute === 'doctors'" key="doctors"/>
          <drawer-shop v-if="currentRoute === 'shops'" key="shops"/>
          <item-drawer v-if="currentRoute === 'shop'" key="shop"/>
        </transition-group>

        </q-scroll-area>
      </q-drawer>
</template>
<script>
export default {
  props: ['miniState', 'toggle'],
  computed: {
    currentRoute () {
      return this.$route.name
    }
  },
  data () {
    return {
      drawer: true
    }
  }
}
</script>