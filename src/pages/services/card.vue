<template>
    <q-card class="my-card" style="width:340px;height:613px">
      <q-img :src="item.image" style = "height:330px;"/>

      <q-card-section>
        <q-btn
          fab
          color="green-7"
          icon="shopping_cart"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />
        <q-btn
          round
          size="sm"
          color="positive"
          icon="fab fa-facebook-f"
          class="absolute"
          style="top: 0; right: 72px; transform: translateY(-50%);"
        />

        <q-btn
          round
          size="sm"
          color="positive"
          icon="fab fa-google"
          class="absolute"
          style="top: 0; right: 108px; transform: translateY(-50%);"
        />

        <q-btn
          round
          size="sm"
          color="positive"
          icon="share"
          class="absolute"
          style="top: 0; right: 144px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{item.name}}
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="local_offer" />
            {{item.price}}
          </div>
        </div>

        <q-rating v-model="item.ratings" :max="item.ratings" size="32px" /> <span class = "text-grey">{{item.ratings}}</span>
      </q-card-section>

      <q-card-section class="q-pt-none" style = "height:105px">
        <div class="text-subtitle1">
         {{item.price}}
        </div>
        <div class="text-caption text-grey">
          {{item.description}}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions class = "justify-center">
        <q-btn  flat round icon="favorite" />
        <q-btn  flat round icon="share" />
      </q-card-actions>
    </q-card>
</template>
<script>
export default {
  props: ['item']
}
</script>