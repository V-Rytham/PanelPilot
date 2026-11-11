
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "multiagentinterviewplatform.firebaseapp.com",
  projectId: "multiagentinterviewplatform",
  storageBucket: "multiagentinterviewplatform.firebasestorage.app",
  messagingSenderId: "827298788662",
  appId: "1:827298788662:web:5ab7d2fb29828161b7af97",
  measurementId: "G-DY6XHQH53F"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}