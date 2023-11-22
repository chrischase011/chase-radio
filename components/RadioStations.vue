<script lang="ts" setup>

const { station } = defineProps(['station'])

</script>

<template>
  <div>
    <img :src="station.favicon" :alt="station.favicon ? station.name : ''" class="radio_thumb">
    <NuxtLink :to="`station/${station.id}`" target="_blank" class="radio-text">{{
      station.name
    }}</NuxtLink>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  gap: 10px
}

.radio-text {
  text-decoration: none;
}

.radio_thumb {
  width: 50px;
  height: 50px;
}
</style>
