import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZdKZPgSzXzSnJViKXQLQdWB2F4VJkWYY",
  authDomain: "tienda-chuches-rafa-2469e.firebaseapp.com",
  projectId: "tienda-chuches-rafa-2469e",
  storageBucket: "tienda-chuches-rafa-2469e.firebasestorage.app",
  messagingSenderId: "119487198883",
  appId: "1:119487198883:web:343e0541e79f0a1c64b116"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
