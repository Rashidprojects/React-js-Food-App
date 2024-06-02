import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChogj4tsW38F-IbuHf9DD6WfyBV_AnZso",
  authDomain: "food-recipe-app-4352b.firebaseapp.com",
  projectId: "food-recipe-app-4352b",
  storageBucket: "food-recipe-app-4352b.appspot.com",
  messagingSenderId: "194294609843",
  appId: "1:194294609843:web:f6e6120eab39b8b5cdbdc6",
  measurementId: "G-SG2J4Y8ZL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;
