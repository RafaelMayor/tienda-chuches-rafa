import { defineStore } from 'pinia';
import { ref } from 'vue';
import { db } from '../composables/useFirebase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

export const useProductsStore = defineStore('products', () => {
  const products = ref([]);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    products.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };

  const addProduct = async (product) => {
    await addDoc(collection(db, 'products'), product);
    await fetchProducts();
  };

  const updateProduct = async (id, updatedData) => {
    await updateDoc(doc(db, 'products', id), updatedData);
    await fetchProducts();
  };

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, 'products', id));
    await fetchProducts();
  };

  return { products, fetchProducts, addProduct, updateProduct, deleteProduct };
});
