// /* eslint-disable react/prop-types */
// import { createContext, useEffect, useState } from 'react';
// import app from '../firebase/firebase.config';
// // import { useState } from 'react';

// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";

// export const AuthContext = createContext();
// const auth= getAuth(app);

// const AuthProvider = ({children}) => {
//     const [user,setUser] = useState();
  

//     const createNewUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//  const userLogin = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password)
//  };
     

//     const logOut =()=>{
//         return signOut(auth);
//     }

//     const authInfo ={
//         user,
//         setUser,
//         createNewUser,
//         logOut,
//         userLogin,
//     };

   

//     useEffect(()=>{
//        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
//             setUser(currentUser);
//         });
//         return() =>{
//             unsubscribe();
//         }
//     },[]);
//     return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;








/* eslint-disable react/prop-types */
// import { createContext, useEffect, useState } from "react";
// import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from './../firebase/firebase.config';

// Create Auth Context
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Update Profile
  const manageProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // Logout user
  const logOut = () => {
    return signOut(auth);
  };

  // Auth Context Info
  const authInfo = {
    user,
    setUser,
    loading,
    createNewUser,
    userLogin,
    handleGoogleLogin,
    manageProfile,
    logOut,
  };

  // Monitor Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
