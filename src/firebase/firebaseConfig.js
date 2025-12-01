import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn4piw8ZLOq4eky0SSGvfYj_nh0bFuhDE",
  authDomain: "portfolio-contact-form-28060.firebaseapp.com",
  projectId: "portfolio-contact-form-28060",
  storageBucket: "portfolio-contact-form-28060.firebasestorage.app",
  messagingSenderId: "43224050230",
  appId: "1:43224050230:web:0674be0e96eb2d7ba48697",
  measurementId: "G-6294H3BW3D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, collection, addDoc, Timestamp };