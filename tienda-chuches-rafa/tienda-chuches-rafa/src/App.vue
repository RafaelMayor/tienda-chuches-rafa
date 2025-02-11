<template>
  <NavBar />
  <div class="container mt-4">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #ffe6f2;
}
</style>
