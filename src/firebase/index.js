// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjjVmHnNGWHcEC84Ciyp-nFDqnLFwwXsc",
  authDomain: "mytodolist-54093.firebaseapp.com",
  projectId: "mytodolist-54093",
  storageBucket: "mytodolist-54093.appspot.com",
  messagingSenderId: "216140858343",
  appId: "1:216140858343:web:498ad2bd317656f2ecb342",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
