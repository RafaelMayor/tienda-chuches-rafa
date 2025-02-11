import { defineStore } from 'pinia';
import { ref } from 'vue';
import { auth, db } from '../composables/useFirebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);

  const login = async (email: string, password: string) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const userDoc = await getDoc(doc(db, 'users', res.user.uid));
    user.value = { ...userDoc.data(), id: res.user.uid };
    localStorage.setItem('user', JSON.stringify(user.value));
  };

  const signup = async (email: string, password: string) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const userData = { email, role: 'user', credit: 3000 };
    await setDoc(doc(db, 'users', res.user.uid), userData);
    user.value = { ...userData, id: res.user.uid };
    localStorage.setItem('user', JSON.stringify(user.value));
  };

  const logout = () => {
    user.value = null;
    localStorage.removeItem('user');
  };

  return { user, login, signup, logout };
});
