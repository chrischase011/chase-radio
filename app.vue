
import { NuxtLayout } from '#build/components';

import { NuxtPage } from '#build/components';
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
}

body {
  background-color: #1a1a1a;
  color: white;
}
</style>