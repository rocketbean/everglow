<template>
      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @click="toggle(false)"
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-green-3"
      >
        <q-scroll-area class="fit text-green-8">
          <q-list padding>
            <q-item clickable v-ripple @click="routeTo('dashboard')">
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>

              <q-item-section >
                Dashboard
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple @click="routeTo('doctors')">
              <q-item-section avatar>
                <q-icon name="fas fa-user-md" color="green-8"/>
              </q-item-section>

              <q-item-section class = "text-green-8" >
                Doctors
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-users" color="green-8"/>
              </q-item-section>

              <q-item-section class = "text-green-8">
                Staff
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-heartbeat" />
              </q-item-section>

              <q-item-section>
                Patients
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple  @click="routeTo('shops')">
              <q-item-section avatar>
                <q-icon name="fas fa-store-alt"/>
              </q-item-section>
              <q-item-section>
                Shopsss
              </q-item-section>
            </q-item>


            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
        <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px;z-index:10; shadow-0"  >
          <q-btn
            dense
            color = "green-4"
            icon="chevron_left"
            class = "shadow-0"
            @click="toggle(true)"
          />
        </div>
      </q-drawer>

</template>
<script>
export default {
  props: ['miniState', 'toggle'],
  data () {
    return {
      drawer: true
    }
  },
  methods: {
    routeTo(name) {
      if(this.$route.name !== name)
        this.$router.push({name})
    }
  }
}
</script>