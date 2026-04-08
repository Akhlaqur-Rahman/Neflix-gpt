// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBy49P41YmOUVIQk6pkY-iBVja65MO0mBs",
//   authDomain: "netflixgpt-ecc50.firebaseapp.com",
//   projectId: "netflixgpt-ecc50",
//   storageBucket: "netflixgpt-ecc50.firebasestorage.app",
//   messagingSenderId: "35003609548",
//   appId: "1:35003609548:web:a7a649e73ba637c6222d69",
//   measurementId: "G-370WVS1P4W"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// // Import Firebase core
// import { initializeApp } from "firebase/app";

// // 🔐 Firebase Auth
// import { getAuth } from "firebase/auth";


// // (Optional) Analytics – sirf production me use hota hai
// import { getAnalytics } from "firebase/analytics";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBy49P41YmOUVIQk6pkY-iBVja65MO0mBs",
//   authDomain: "netflixgpt-ecc50.firebaseapp.com",
//   projectId: "netflixgpt-ecc50",
//   storageBucket: "netflixgpt-ecc50.appspot.com",
//   messagingSenderId: "35003609548",
//   appId: "1:35003609548:web:a7a649e73ba637c6222d69",
//   measurementId: "G-370WVS1P4W",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // ✅ EXPORT AUTH (THIS FIXES YOUR ERROR)
// export const auth = getAuth(app);

// // Optional analytics (safe)
// export const analytics = getAnalytics(app);


// Import Firebase core
import { initializeApp } from "firebase/app";

// 🔐 Firebase Auth
import { getAuth } from "firebase/auth";

// ✅ Firestore
import { getFirestore } from "firebase/firestore";

// (Optional) Analytics – sirf production me use hota hai
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy49P41YmOUVIQk6pkY-iBVja65MO0mBs",
  authDomain: "netflixgpt-ecc50.firebaseapp.com",
  projectId: "netflixgpt-ecc50",
  storageBucket: "netflixgpt-ecc50.appspot.com",
  messagingSenderId: "35003609548",
  appId: "1:35003609548:web:a7a649e73ba637c6222d69",
  measurementId: "G-370WVS1P4W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ EXPORT AUTH
export const auth = getAuth(app);

// ✅ EXPORT Firestore DB
export const db = getFirestore(app);

// Optional analytics
export const analytics = getAnalytics(app);
