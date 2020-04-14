<template>
  <q-layout class="bg-grey-1" view="hhh lpr fff">
    <login/>
    <q-header  class="text-black " style = "background:rgba(139, 195, 74, .2)" height-hint="61.59">
      <q-toolbar class="q-py-sm q-px-md">
        <q-avatar>
          <q-img src="statics/logo.svg" style = "height:auto;width:20px;color:white"/>
        </q-avatar>

        <q-select
          ref="search"  dense standout use-input hide-selected class="GL__toolbar-select"
          color="black" :stack-label="false" label="Search or jump to..."
          v-model="text" :options="essentialLinks" 
          style="width: 300px"
        >

          <template v-slot:append>
            <img src="https://cdn.quasar.dev/img/layout-gallery/img-github-search-key-slash.svg">
          </template>

          <template v-slot:no-option>
            <q-item>
              <q-item-section>
                <div class="text-center">
                  <q-spinner-pie
                    color="grey-5"
                    size="24px"
                  />
                </div>
              </q-item-section>
            </q-item>
          </template>

          <template v-slot:option="scope">
            <q-item
              v-bind="scope.itemProps"
              v-on="scope.itemEvents"
              class="GL__select-GL__menu-link"
            >
              <q-item-section side>
                <q-icon name="collections_bookmark" />
              </q-item-section>
              <q-item-section>
                <q-item-label v-html="scope.opt.label" />
              </q-item-section>
              <q-item-section side :class="{ 'default-type': !scope.opt.type }">
                <q-btn outline dense no-caps text-color="blue-grey-5" size="12px" class="bg-grey-1 q-px-sm">
                  {{ scope.opt.type || 'Jump to' }}
                  <q-icon name="subdirectory_arrow_left" size="14px" />
                </q-btn>
              </q-item-section>
            </q-item>
          </template>
        </q-select>

        <q-space />

        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn v-if="$q.screen.gt.xs" dense flat round size="sm" icon="notifications" />
          <q-btn v-if="$q.screen.gt.xs" dense flat>
            <div class="row items-center no-wrap">
              <q-icon name="add" size="20px" />
              <q-icon name="arrow_drop_down" size="16px" style="margin-left: -2px" />
            </div>
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item clickable class="GL__menu-link">
                  <q-item-section>New repository</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Import repository</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>New gist</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>New organization</q-item-section>
                </q-item>
                <q-separator />
                <q-item-label header>This repository</q-item-label>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>New issue</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn dense flat no-wrap>
            <q-avatar rounded size="20px" icon = "fas fa-user">
              <!-- <img src="https://cdn.quasar.dev/img/avatar3.jpg"> -->
            </q-avatar>
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu auto-close>
              <q-list dense>
                <q-item class="GL__menu-link-signed-in">
                  <q-item-section>
                    <div><strong>Not</strong> Signed in </div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link-status">
                  <q-item-section>
                    <div>
                      <q-icon name="tag_faces" color="blue-9" size="18px" />
                      Set your status
                    </div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your profile</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your gifts</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Help</q-item-section>
                </q-item>
 
                <q-item clickable class="GL__menu-link" @click = "_toggle('login')">
                  <q-item-section>Sign In</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer :reveal-offset = "1000" class = "bg-positive flex flex-center">
      <div style = "width:1280px;padding:30px;">
        <div style = "display:flex;flex-direction:row">
          <img src = "statics/logo_l.svg" style = "padding-right:10px;border-right:1px solid whitesmoke"/>
          <div style = "padding-left:20px">
            <q-chip icon="fab fa-facebook-f" color="green" text-color="white" >
              https://facebook.com/everglow
            </q-chip>
            <q-chip icon="fab fa-google" color="green" text-color="white" >
              email@everglow.com.ph
            </q-chip><br>
            <q-chip icon="fas fa-mobile-alt" color="green" text-color="white" >
              +63917 123 4567
            </q-chip>
          </div>
        </div>

      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'MainLayout',
  components: {
  },

  data () {
    return {
      leftDrawerOpen: false,
      text: '',
      essentialLinks: []
    }
  },
  methods: {
    ...mapActions(['_toggle'])
  }
}
</script>
