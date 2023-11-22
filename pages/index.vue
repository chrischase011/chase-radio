<script lang="ts" setup>

import { RadioBrowserApi } from "radio-browser-api"

const api = new RadioBrowserApi("chase-radio")

api.setBaseUrl("https://de1.api.radio-browser.info");

const currentPage: any = ref(1)
const countStations = ref(0)
const totalPages = ref(60)
const stations = ref([])


const fetchStations = async () => {
  try {
    const response: any = await api.searchStations({
      countryCode: "PH",
      limit: 10,
      offset: (currentPage.value - 1) * 10
    })

    stations.value = response
  }
  catch (error) {
    console.error(error)
  }
}

const fetchTotalStations = async () => {
  try {
    const countResponse = await api.searchStations({
      countryCode: 'PH',
    });

    countStations.value = countResponse.length;
    totalPages.value = Math.ceil(countStations.value / 10);

    console.log("BaseURL: " + api.getBaseUrl());
  } catch (error) {
    console.error('Error fetching total stations', error);
  }
};

const visiblePages = computed(() => {
  const startPage = Math.max(1, currentPage.value - 2);
  const endPage = Math.min(totalPages.value, startPage + 4);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
});

const pageNow = (num) => {
  currentPage.value = num
  fetchStations()
}


onMounted(async () => {
  await fetchStations()
  await fetchTotalStations()
})

</script>

<template>
  <div class="container my-3">
    <h1>Welcome to Chase Radio. <span class="tagline">Your free radio station.</span></h1>
    <p>There are {{ countStations }} stations in the Philippines.</p><br>
    <ul class="radio_list" v-for="station in stations">
      <li>
        <RadioStations :station="station" />
      </li>
    </ul>
    <nav aria-label="Page navigation example">
      <ClientOnly>
        <ul class="pagination">
          <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
            <a class="page-link" @click="pageNow(1)" href="javascript:void(0)">
              1
            </a>
          </li>
          <template v-if="currentPage - 2 > 2">
            <li class="page-item disabled"><span class="page-link">...</span></li>
          </template>
          <template v-for="page in visiblePages" :key="page">
            <template v-if="page !== 1 && page !== totalPages">
              <li class="page-item" :class="{ 'disabled': currentPage === page }">
                <a class="page-link" @click="pageNow(page)" href="javascript:void(0)">
                  {{ page }}
                </a>
              </li>
            </template>

          </template>
          <template v-if="currentPage + 2 < totalPages - 1">
            <li class="page-item disabled"><span class="page-link">...</span></li>
          </template>
          <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
            <a class="page-link" @click="pageNow(totalPages)" href="javascript:void(0)">
              {{ totalPages }}
            </a>
          </li>
        </ul>
      </ClientOnly>
    </nav>

  </div>
</template>

<style scoped>
h2 {
  font-weight: bold;
}

.tagline {
  font-style: italic;
  font-weight: 200 !important;
}

.radio_list {
  /* columns: 2;
  column-gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding: 0; */
  list-style-type: none;
}
</style>
