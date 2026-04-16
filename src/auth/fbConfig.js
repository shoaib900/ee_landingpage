import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAx8SySBwGy5IFsOMLDoZtWLONvmLEiSkI",
  authDomain: "exceledge123.firebaseapp.com",
  projectId: "exceledge123",
  storageBucket: "exceledge123.firebasestorage.app",
  messagingSenderId: "608120429040",
  appId: "1:608120429040:web:8cf08ee1ba380c0ab76535"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)