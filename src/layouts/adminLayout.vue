<template>
  <q-layout view="HHH lpr lfr" style = "max-height:100vh;overflow:hidden " class = "rounded-borders">
    <add-doctor/>
    <q-header    height-hint="98" style = "z-index: 5;" class= "bg-green-4" elevated >
      <q-toolbar>
            <img src="statics/logo_l.svg" style = "margin-right:8px;filter:brightness(100%);width:100px">
        <q-separator  vertical color="white" inset />
        <q-space/>
      </q-toolbar>
    </q-header>

    <q-page-container style = "height:100%;width:100%;position:fixed;padding-bottom:0px;">
      <router-view />
    </q-page-container>
   <left-drawer :miniState="miniState" :toggle= "toggleMiniState" />
   <right-drawer :miniState="rightMiniState" :toggle= "toggleMiniState" />

 <!-- -->
   <!-- <q-drawer v-model="leftDrawerOpen" :mini="miniLeft" show-if-above class = "bg-primary" @click.capture="drawerClick" :width="300">
      <left-drawer  :ministate="toggleMiniLeft" :onminimode="miniLeft" />

    </q-drawer> -->
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      drawers: false,
      miniState:true,
      rightMiniState:true,
      leftDrawerOpen: true,
      rightDrawerOpen: true,
      overlay: true,
      mini: true,
      miniLeft: true
    }
  },
  methods: {
    toggleMiniState (t) {
      this.miniState = t
    }
  }
}
</script>
