import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2DC0DN00qjZYVGwEVIrLviEl8_w3yeAA",
  authDomain: "pruebaconexionfirebase2.firebaseapp.com",
  projectId: "pruebaconexionfirebase2",
  storageBucket: "pruebaconexionfirebase2.appspot.com",
  messagingSenderId: "947563898304",
  appId: "1:947563898304:web:65de5646c3fbab036c1425",
  measurementId: "G-3CX3NF0N92"
};

const app = initializeApp(firebaseConfig);
export default app

export const auth = getAuth(app)
export const db = getFirestore(app)