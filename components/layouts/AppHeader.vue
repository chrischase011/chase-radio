<script lang="ts" setup></script>

<template>
  <div>
    <header>
      <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <NuxtLink to="/" class="navbar-brand">Chase Radio</NuxtLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NuxtLink class="nav-link" aria-current="page" to="/">Radio Stations</NuxtLink>
              </li>
              <li class="nav-item d-none">
                <NuxtLink class="nav-link" to="#">Radio</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped></style>