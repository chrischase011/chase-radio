<script lang="ts" setup>

const currentYear = new Date().getFullYear();

</script>

<template>
  <div>
    <footer>
      <p>All Rights Reserved &copy; {{ currentYear }}</p>
    </footer>
  </div>
</template>

<style scoped>
footer {
  background-color: #1e1e1e;
  position: relative;
  bottom: 0;
  padding: 15px;
}

p {
  text-align: center;
}
</style>