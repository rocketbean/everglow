<template>
  <div>
    <q-carousel  animated  v-model="slide" height="550px" navigation control-color="grey" infinite autoplay vertical >
      <q-carousel-slide name="first" img-src="https://media.allure.com/photos/5a94784e4a66ba77e87cd5b4/16:9/w_2560%2Cc_limit/layering-skin-care-lede-1.jpg">
        <div class="absolute-bottom flex flex-center">
          <div class = "custom-caption" style = "width:400px">
            <q-img src="statics/logo_l.svg" />
            <div class="text-subtitle1">Nam adipiscing. Donec pede justo</div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dry-skin-on-the-face-causes-and-treatments-according-to-skin-care-experts-1575908895.png?crop=0.668xw:1.00xh;0.245xw,0&resize=768:*">
        <div class="absolute-bottom flex flex-center">
          <div class = "custom-caption" style = "width:400px">
              <q-img src="statics/logo_l.svg" />
            <div class="text-subtitle1">
              Nam adipiscing. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
            </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="http://tumi4health.com/wp-content/uploads/2016/03/woman-beautiful-skin.jpg">
        <div class="absolute-bottom flex flex-center">
          <div class = "custom-caption" style = "width:400px">
            <q-img src="statics/logo_l.svg" />
            <div class="text-subtitle1">Vivamus consectetuer hendrerit lacus.</div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slide: 'first'
    }
  }
}
</script>