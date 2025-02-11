<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">🍭 Tienda de Chuches</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item" v-if="!authStore.user">
              <router-link class="nav-link" to="/login">Iniciar sesión</router-link>
            </li>
            <li class="nav-item" v-if="!authStore.user">
              <router-link class="nav-link" to="/signup">Registrarse</router-link>
            </li>
            <li class="nav-item" v-if="authStore.user?.role === 'admin'">
              <router-link class="nav-link" to="/admin">Administrar</router-link>
            </li>
            <li class="nav-item" v-if="authStore.user">
              <router-link class="nav-link" to="/cart">🛒 Carrito</router-link>
            </li>
            <li class="nav-item credit" v-if="authStore.user">
              💰 Crédito: €{{ authStore.user?.credit.toFixed(2) }}
            </li>
            <li class="nav-item" v-if="authStore.user">
              <button class="btn btn-danger" @click="logout">Cerrar sesión</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { useAuthStore } from '@/store/auth';
  import { useRouter } from 'vue-router';
  
  const authStore = useAuthStore();
  const router = useRouter();
  
  const logout = () => {
    authStore.logout();
    router.push('/login');
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #ff66b2 !important;
  }
  .nav-link, .navbar-brand {
    color: white !important;
  }

  .credit {
  color: white;
  font-weight: bold;
  margin-right: 15px;
  }
  </style>
  