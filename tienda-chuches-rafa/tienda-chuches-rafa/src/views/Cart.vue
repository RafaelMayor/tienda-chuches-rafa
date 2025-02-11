<template>
    <div class="cart-container">
      <h1>🛒 Carrito de Compras</h1>
      <div v-if="cartStore.cart.length === 0">
        <p>Tu carrito está vacío.</p>
      </div>
      <div v-else>
        <div v-for="item in cartStore.cart" :key="item.id" class="cart-item">
          <img :src="item.image" class="product-image" :alt="item.name">
          <div class="cart-details">
            <h5>{{ item.name }}</h5>
            <p>Precio: €{{ item.price.toFixed(2) }}</p>
            <p>Stock disponible: {{ item.stock }}</p>
            <input type="number" v-model="item.quantity" :max="item.stock" min="1">
            <button @click="cartStore.removeFromCart(item.id)" class="btn btn-danger btn-sm">Eliminar</button>
          </div>
        </div>
        <p><strong>Total:</strong> €{{ totalPrice.toFixed(2) }}</p>
        <button @click="cartStore.purchase()" class="btn btn-pink">Comprar</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useCartStore } from '@/store/cart';
  
  const cartStore = useCartStore();
  
  const totalPrice = computed(() =>
    cartStore.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
  </script>
  
  <style scoped>
  .cart-container {
    padding: 20px;
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
  }
  
  .product-image {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
  
  .btn-pink {
    background-color: #ff66b2;
    color: white;
  }
  </style>
  