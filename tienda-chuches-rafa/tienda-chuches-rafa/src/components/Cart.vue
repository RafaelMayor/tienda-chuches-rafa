<template>
    <div class="cart-container">
      <h2>🛒 Carrito</h2>
      <div v-if="cartStore.cart.length > 0">
        <div v-for="item in cartStore.cart" :key="item.id" class="cart-item">
          <img :src="item.image" class="cart-img">
          <div>
            <p>{{ item.name }} - 💰{{ item.price.toFixed(2) }}€</p>
            <input type="number" v-model="item.quantity" min="1" :max="item.stock">
            <button class="btn btn-danger btn-sm" @click="removeFromCart(item.id)">Eliminar</button>
          </div>
        </div>
        <button class="btn btn-success mt-3" @click="checkout">Comprar</button>
      </div>
      <p v-else>El carrito está vacío.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useCartStore } from '@/store/cart';
  
  const cartStore = useCartStore();
  
  const removeFromCart = (id) => {
    cartStore.removeFromCart(id);
  };
  
  const checkout = () => {
    alert('Compra realizada con éxito'); 
    cartStore.clearCart();
  };
  </script>
  
  <style scoped>
  .cart-container {
    padding: 20px;
  }
  .cart-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .cart-img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
  </style>
  