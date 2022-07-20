import firebase from "firebase/compat";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUlPjS_-bmri2FD122KbeY_s_Y-Ub-M6k",
  authDomain: "fir-auth-6d42a.firebaseapp.com",
  projectId: "fir-auth-6d42a",
  storageBucket: "fir-auth-6d42a.appspot.com",
  messagingSenderId: "749482237164",
  appId: "1:749482237164:web:3a3404cec7191b766019c9"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
 app;
}

const auth = firebase.auth();

export {auth};
