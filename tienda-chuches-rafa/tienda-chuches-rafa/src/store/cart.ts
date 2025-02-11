import { defineStore } from 'pinia';
import { useAuthStore } from './auth';
import { useProductsStore } from './products';
import { db } from '@/composables/useFirebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as any[]
  }),

  actions: {
    addToCart(product: any) {
      const existingItem = this.cart.find(item => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity < product.stock) {
          existingItem.quantity++;
        }
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(productId: string) {
      this.cart = this.cart.filter(item => item.id !== productId);
    },

    async purchase() {
      const authStore = useAuthStore();
      const productsStore = useProductsStore();

      if (!authStore.user) {
        alert('Debe iniciar sesión para comprar.');
        return;
      }

      let total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

      if (authStore.user.credit < total) {
        alert('No tiene suficiente crédito.');
        return;
      }

      try {
        // Descontar crédito del usuario en Firebase
        const userRef = doc(db, 'users', authStore.user.id);
        await updateDoc(userRef, { credit: authStore.user.credit - total });

        // Actualizar el stock de los productos en Firebase
        for (const item of this.cart) {
          const productRef = doc(db, 'products', item.id);
          const productSnap = await getDoc(productRef);

          if (!productSnap.exists()) continue;

          const productData = productSnap.data();
          const newStock = productData.stock - item.quantity;

          if (newStock < 0) {
            alert(`No hay suficiente stock para ${item.name}.`);
            return;
          }

          await updateDoc(productRef, { stock: newStock });
        }

        // Actualizar en el store
        authStore.user.credit -= total;
        productsStore.fetchProducts(); // Refrescar los productos
        this.cart = [];

        alert('Compra realizada con éxito.');
      } catch (error) {
        console.error('Error al procesar la compra:', error);
        alert('Hubo un error al procesar la compra.');
      }
    }
  }
});
