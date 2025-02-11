<template>
    <div class="container">
      <h2>📦 Administración de Productos</h2>
      <form @submit.prevent="addProduct">
        <input type="text" v-model="newProduct.name" placeholder="Nombre" required>
        <input type="text" v-model="newProduct.description" placeholder="Descripción" required>
        <input type="url" v-model="newProduct.image" placeholder="Imagen URL" required>
        <input type="number" v-model="newProduct.price" placeholder="Precio" required step="0.01">
        <input type="number" v-model="newProduct.stock" placeholder="Stock" required>
        <button class="btn btn-pink" type="submit">Añadir Producto</button>
      </form>
      <div class="product-list">
        <div v-for="product in productsStore.products" :key="product.id">
          <p>{{ product.name }} - {{ product.price }}€</p>
          <button class="btn btn-danger btn-sm" @click="deleteProduct(product.id)">Eliminar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useProductsStore } from '@/store/products';
  
  const productsStore = useProductsStore();
  const newProduct = ref({ name: '', description: '', image: '', price: 0, stock: 0 });
  
  onMounted(() => {
    productsStore.fetchProducts();
  });
  
  const addProduct = () => {
    productsStore.addProduct({ ...newProduct.value });
    newProduct.value = { name: '', description: '', image: '', price: 0, stock: 0 };
  };
  
  const deleteProduct = (id) => {
    productsStore.deleteProduct(id);
  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  .btn-pink {
    background-color: #ff66b2;
    color: white;
  }
  </style>
  