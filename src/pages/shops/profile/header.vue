<template>
  <q-card flat  style="width: 100%">
    <q-card-section horizontal v-if = "loadState">
      <q-card-section>
        <q-skeleton type="circle" size="300px" />
      </q-card-section>
      <q-card-section class = "q-gutter-y-md" style = "display:flex;justify-content:space-evenly;align-items:space-evenly;flex-direction:column;width:100%">
          <q-skeleton type="rect" width="80%" />
          <q-skeleton type="rect" width="100%" />
          <q-skeleton type="rect" width="60%" />
          <q-skeleton type="rect" width="60%" />
          <q-skeleton type="rect" width="70%" />
      </q-card-section>
    </q-card-section>
    <q-card-section horizontal v-else>
      <q-card-section>
        <q-avatar class = "shadow-1" round size = "300px">
          <q-img :src="shop.avatar"
            spinner-color="red"
            style="height: 140px; max-width: 150px"
          />
        </q-avatar>
      </q-card-section>
      <q-card-section class = "q-gutter-y-md" style = "display:flex;justify-content:center;align-items:space-evenly;flex-direction:column;width:100%">
          <div style = "display:flex;justify-content: space-between;">
            <span class = "text-h3"> {{ shop.name }}</span>
            <div>
              <small>
                {{this.shop.owner.name}}
              </small>
              <q-avatar round bordered class = "shadow-1" icon = "fas fa-user"/>
            </div>
          </div>
          <span class = "text-caption"> admins: {{ shop.users.length }} </span>

          <span class = "text-caption"> {{ shop.description }} </span>
          
          <q-tabs inline-label align="justify" v-model="tab" class="text-green-8 full-width bg-green-3" >
            <q-tab name="mails" icon="fas fa-tachometer-alt" label="Dashboard" />
            <q-tab name="alarms" icon="fas fa-shopping-basket" label="Items" />
            <q-tab name="movies" icon="fas fa-users" label="users" />
          </q-tabs>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  props: ['loadState', 'shop', 'panel'],
  watch: {
    tab (v) {
      this.panel(v)
    }
  },
  data () {
    return {
      tab: 'mails'
    }
  }
  
}
</script>