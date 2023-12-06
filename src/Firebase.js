import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHYJ1ffIw8UTBPZHDkLut9j843NgiYDUQ",
  authDomain: "zodaic-project-base.firebaseapp.com",
  projectId: "zodaic-project-base",
  storageBucket: "zodaic-project-base.appspot.com",
  messagingSenderId: "796267525536",
  appId: "1:796267525536:web:7ec8d9fbd710c97fae60c5"
};
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app);
export const db = getFirestore(app);
