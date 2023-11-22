<script lang="ts" setup>

import { RadioBrowserApi, StationSearchType } from 'radio-browser-api'
import { onMounted } from 'vue';

const api = new RadioBrowserApi('chase-radio')
api.setBaseUrl("https://de1.api.radio-browser.info");

const id = useRoute().params.id

const station = await api.getStationsById([id])

const playAudio = () => {
  const audioPlayer = new Audio()
  audioPlayer.src = station[0].urlResolved;
  audioPlayer.play();
}

console.log(station)

onMounted(() => {
  // playAudio()
})

</script>

<template>
  <div class="container my-3">
    Station: {{ station[0].name }}
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="card">
          <img :src="station[0].favicon" class="card-img-top">

          <div class="card-body">
            <h3 class="card-title text-black">{{ station[0].name }}</h3>
            <audio controls autoplay preload="none" class="w-100">
              <source type="audio/mpeg" :src="station[0].urlResolved">
            </audio>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
