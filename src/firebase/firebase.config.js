
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDFMhDMVDMt2o-DoDb64c4GKtfowLZh7g",
  authDomain: "hotel-booking-2ecdd.firebaseapp.com",
  projectId: "hotel-booking-2ecdd",
  storageBucket: "hotel-booking-2ecdd.firebasestorage.app",
  messagingSenderId: "602384977617",
  appId: "1:602384977617:web:21809d796098b27a1cfff0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
export default app;


