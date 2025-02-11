<template>
    <div class="admin-container">
      <h1>⚙️ Panel de Administración</h1>
      <AdminPanel />
    </div>
  </template>
  
  <script setup lang="ts">
  import AdminPanel from '@/components/AdminPanel.vue';
  </script>
  
  <style scoped>
  .admin-container {
    padding: 20px;
  }
  </style>
  