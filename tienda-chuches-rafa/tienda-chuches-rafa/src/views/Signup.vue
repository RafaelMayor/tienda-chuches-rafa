<template>
    <div class="auth-container">
      <h2>📝 Registrarse</h2>
      <form @submit.prevent="signup">
        <input type="email" v-model="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Contraseña" required>
        <button class="btn btn-pink" type="submit">Registrarse</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useAuthStore } from '@/store/auth';
  import { useRouter } from 'vue-router';
  
  const authStore = useAuthStore();
  const router = useRouter();
  const email = ref('');
  const password = ref('');
  
  const signup = async () => {
    try {
      await authStore.signup(email.value, password.value);
      router.push('/');
    } catch (error) {
      alert('Error al registrarse');
    }
  };
  </script>
  
  <style scoped>
  .auth-container {
    padding: 20px;
    text-align: center;
  }
  .btn-pink {
    background-color: #ff66b2;
    color: white;
  }
  </style>
  