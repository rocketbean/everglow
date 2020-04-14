<template>
    <div style = "width:405px">
        <GlobalEvents
            @keydown.enter.exact="registerUser()"
        />
        <div class = " flex flex-center" style = "flex-direction:column">
          <q-btn  round outline circle color = "green-8" icon = "fas fa-user-md" size = "lg" style="margin:10px"/>
            <!-- <q-menu touch-position>
              <q-card style = "position:relative;" >
                <q-card-section  >
                  <div >
                    <div class="row flex-center">
                      <div class="col-4 bg-grey-8 shadow-2 " v-for = "photo in photos" style = "margin:2px;height:200px;width:200px">
                        <q-img :src="photo.url" style="height: 200px;width:200px; cursor:pointer" class = "hoveredImg" @click = "changePrimary(photo.url)" v-close-popup/>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-menu> -->
          </q-img>
        </div>
        <q-input bottom-slots v-model="register.email" label="email" type = "email"  outlined autofocus/>
        <q-input bottom-slots v-model="register.name" label="name"  outlined     />
        <q-input bottom-slots v-model="confirmPassword" label="password" type='password' outlined  />
        <q-input bottom-slots v-model="register.password" label="re type your password" type='password' outlined 
        :rules= "[val => val === this.register.password || 'password did not match']"
        lazy-rules />
    </div>
</template>
<script>
import axios from 'axios'
import {mapActions} from 'vuex'
export default {
    watch: {
        register: {
            handler(value) {
                if (value.password === this.confirmPassword) this.validated = true
                else this.validated = false
            },
            deep: true
        }
    },
    data () {
        return {
            validated: false,
            register: {
                name: '',
                email: '',
                avatar: 'https://tattooimages.biz/images/gallery/Upset_geometric_panda_in_profile_tattoo_design.png',
                password: '',
            },
            confirmPassword: '',
            photos: [
                {
                id: 1,
                url: "https://c7.uihere.com/files/60/50/528/gray-wolf-sticker-wall-decal-modern-art-geometric-wolf-avatar.jpg",
                name: "wolf"
                },
                {
                id: 2,
                url: "https://tattooimages.biz/images/gallery/Upset_geometric_panda_in_profile_tattoo_design.png",
                name: "panda"
                },
                {
                id: 3,
                url: "https://cdn3.iconfinder.com/data/icons/objects-shapes-emojis/513/emoji-emoticon-shape-happy-face-smiley_26-512.png",
                name: "emoji"
                },
                {
                id: 4,
                url: "https://thumbs.dreamstime.com/b/smart-pink-monster-face-vector-monster-square-avatar-funny-monster-97159719.jpg",
                name: "monster"
                },
            ],
        }
    },
    methods: {
        ...mapActions(['_toggle']),
        changePrimary (url) {
        this.register.avatar = url
        },
        registerUser () {
            if(this.validated) {
                this.$axios.post("users", this.register).then(r => {
                    this._toggle("login");
                    this.$_s.authenticate(this,r)
                    this.cb()
                }).catch(e => {
                    console.log(e.message)
                })                
            } 

        },

    }
}
</script>