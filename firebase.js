import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvshjsVWNczDl_HaMHA16jfz0vfA1bW_k",
  authDomain: "login-form-87fc4.firebaseapp.com",
  projectId: "login-form-87fc4",
  storageBucket: "login-form-87fc4.firebasestorage.app",
  messagingSenderId: "37174481968",
  appId: "1:37174481968:web:b1f2a983a1999c26e549f5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
