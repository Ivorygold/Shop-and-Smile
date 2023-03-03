import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB7vt3bCNb2AO8fgrS8_4p_e_VekKU4KQ0",
  authDomain: "shop-and-smile.firebaseapp.com",
  projectId: "shop-and-smile",
  storageBucket: "shop-and-smile.appspot.com",
  messagingSenderId: "779200232811",
  appId: "1:779200232811:web:0807ac3b06f19f6ea3e02e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
