// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ_pHmP8qTwCPJElc6vmreLgxJdjfO8Ys",
  authDomain: "netflix-clone-7b6d6.firebaseapp.com",
  projectId: "netflix-clone-7b6d6",
  storageBucket: "netflix-clone-7b6d6.appspot.com",
  messagingSenderId: "134813664240",
  appId: "1:134813664240:web:3b3e758ea053b583c31335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged};
