<template>
<div class=" row  justify-center items-center content-start" style = "width:100%">
  <div class="" style = "padding:10px" v-for = "(item,k) in items" :key = "k">
    <item-card :item = "item"/>
  </div>
      <div style="width:1280px; padding-top:12px">
        <q-card class="my-card bg-grey-1" flat >
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs flex flex-center">
              <div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-overline text-h1">  - Jane Doe</div>

                <div class="text-caption text-grey">
                  "Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Nunc nulla. Vivamus euismod mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
  Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Morbi vestibulum volutpat enim. Etiam rhoncus. Fusce fermentum."
                </div>
              </div>

            </q-card-section>

            <q-card-section class="col-5 flex flex-center ">
              <q-avatar style = "height:450px;width:450px" class = "shadow-3">
                <img
                  style = "height:450px;width:auto"
                  src="https://blog.hubspot.com/hubfs/Customer-testimonial-page.jpg"
                />
              </q-avatar>
            </q-card-section>
          </q-card-section>

        </q-card>
      </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          name: 'Lorem',
          image: 'https://www.dermadoctor.com/wp/wp-content/uploads/2013/10/Skincare101.jpg',
          ratings: 4.5,
          price: "$255",
          description: 'Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. '
        },
        {
          name: 'Ipsum',
          image: 'https://01.avoncdn.com/shop/media/995098/avon-skincare-concern-targeted-treatments.jpg',
          ratings: 3,
          price: "$525",
          description: 'Nam eget dui. Fusce egestas elit eget lorem. In turpis. '
        },
        {
          name: 'Dolor',
          image: 'https://specials-images.forbesimg.com/imageserve/74855437/960x0.jpg?cropX1=0&cropX2=4335&cropY1=0&cropY2=2890',
          ratings: 5,
          price: "$199",
          description: 'Nam eget dui. Fusce egestas elit eget lorem. In turpis. '
        },
        {
          name: 'Emet',
          image: 'https://313ct818yszd3xd6xa2z47nm-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/Male-care-1240x833.jpg',
          ratings: 4,
          price: "$99",
          description: 'Nam eget dui. Fusce egestas elit eget lorem. In turpis. '
        }
      ]
    }
  }
}
</script>