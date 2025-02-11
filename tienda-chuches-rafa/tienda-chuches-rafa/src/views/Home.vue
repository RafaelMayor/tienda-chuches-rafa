<template>
  <div class="home-container">
    <h1 class="text-center">🍬 Bienvenido a la Tienda de Chuches 🍬</h1>
    <div class="products-container">
      <ProductCard v-for="product in productsStore.products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductsStore } from '@/store/products';
import ProductCard from '@/components/ProductCard.vue';

const productsStore = useProductsStore();

onMounted(() => {
  productsStore.fetchProducts();
});
</script>

<style scoped>
.home-container {
  background-color: #ffe6f2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: purple;
}

.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
