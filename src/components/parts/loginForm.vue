<template>
    <div style = "padding:10px;padding-top:0px;" >
        <GlobalEvents
            @keydown.enter.exact="login()"
        />
        <div style = "height:280px; width:380px;margin:0px;padding:0px;">
            <div ref = "loginParticles" class = "col" id = "loginParticles" style = "height:100%;width:100%; display:flex;align-self:center;justify-contents:center;position:relative">
                <div style = "width:100%;height:100%;position:absolute;display:flex;justify-content:center;overflow:hidden">
                    <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" >
                        <q-linear-progress query color="green-2"  class="q-mt-sm invisibleTrack" style = "height:100%; color:rgba(255,255,255,0.4) !important; background:none" v-show= "loadState"/>
                    </transition>
                    <img src="statics/logo_l_green.svg" style = "position:absolute;align-self:center;justify-self:center; border-radius:5px;padding:10px" class = "shadow-0"/>
                </div>                
            </div>
        </div>
           <div class = " flex flex-center">
                <span v-if="errState" class = "text-red">email or password did not matched our records</span>
            </div>
        <q-input bottom-slots v-model="creds.email" label="email"  color = "green-2" outlined filled autofocus :loading="loadState" :disable="loadState"/>
        <q-input bottom-slots v-model="creds.password" label="password" color = "green-2" type='password' filled outlined :loading="loadState" :disable="loadState">
            <q-tooltip anchor="top middle" v-model="showToolTip" >
                press 'enter' to proceed
            </q-tooltip>
        </q-input>
    </div>
</template>
<script>
import axios from 'axios'
import {mapActions} from 'vuex'
import { bgmixin } from 'src/mixins/bgmixin'

export default {
    mixins: [bgmixin],
    watch: {
        password (value) {
            if(this.email.length > 0 && this.password.length > 0)
                this.showToolTip = true
            else
                this.showToolTip = false
        },
        email (value) {
            if(this.email.length > 0 && this.password.length > 0)
                this.showToolTip = true
            else
                this.showToolTip = false
        }
    },
    data () {
        return {
            showToolTip: true,
            errState: false,
            loadState: false,
            creds: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
		...mapActions(['_toggle', '_auth']),
        login () {
            this.loadState = true
            this.$axios.post('login', this.creds).then (r => {
                this.$_s.authenticate(this,r.data.token)
                this.$_sessionHandler.create(r.data.user)
                window.$existence = true;
                this.$router.push('dashboard')
            this.loadState = false
            }).catch(e => {
            this.loadState = false

                console.log(e.response.data, "@err")
            })
        } 
    },
    mounted () {
        let errState = false;
            var xel = this
            var options = { numval: 55, animSpeed: 1,opacity:1, densityArea: 100, polysides: 8, stroke:1, lineWidth: 1, lineOpacity: 0.4,
                moveSpeed: 0.5, moveBounce: true, lineColor: false, svgColor: "#333333"}
            if(errState) options.lineColor = "#ad0000"
            else options.lineColor = false
            setTimeout(function() {
                xel.assignParticleBg('loginParticles', options)
            },200)
    }
}
</script>