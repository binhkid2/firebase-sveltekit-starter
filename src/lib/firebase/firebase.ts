
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC-wr8kjza5MJoLR5HvQ5nvacLCZBf4RpE",
  authDomain: "hello-4f9b3.firebaseapp.com",
  projectId: "hello-4f9b3",
  storageBucket: "hello-4f9b3.appspot.com",
  messagingSenderId: "987690793466",
  appId: "1:987690793466:web:85f1dfe04e08a90e714c43",
  measurementId: "G-FVZC1032G7"
};
let analytics; let db;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }

  // Access Firebase services using shorthand notation
  db = getFirestore();
}
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export {analytics, db};
export const auth = getAuth();
export const storage = getStorage();