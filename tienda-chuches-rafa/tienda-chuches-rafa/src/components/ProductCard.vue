<template>
  <div class="card product-card">
    <img :src="product.image" class="card-img-top product-image" :alt="product.name">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <p class="card-text"><strong>Precio:</strong> €{{ product.price.toFixed(2) }}</p>
      <p class="card-text"><strong>Stock:</strong> {{ product.stock }}</p>
      <button :disabled="product.stock === 0" @click="addToCart" class="btn btn-pink">
        {{ product.stock === 0 ? 'Agotado' : 'Añadir al carrito' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useCartStore } from '@/store/cart';

const props = defineProps({
  product: Object
});

const cartStore = useCartStore();

const addToCart = () => {
  if (props.product.stock > 0) {
    cartStore.addToCart(props.product);
  }
};
</script>

<style scoped>
.product-card {
  width: 250px;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: contain; /* Asegura que la imagen se vea completa sin recortes ni ampliaciones */
}

.btn-pink {
  background-color: #ff66b2;
  color: white;
  width: 100%;
}
</style>
