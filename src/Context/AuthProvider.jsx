import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase.config';

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(' ')
  const [loading,setLoading]=useState(false)

  // google provider
  const googleProvider=new GoogleAuthProvider()

// create user
  const createUserFunc=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
    
  }

  // login with google
  const loginWithGoogle=()=>{
    return signInWithPopup(auth,googleProvider);
  }

  // login with email
  const loginWIthEmailFunc=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  };

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
      unsubscribe();
    }
  },[]);

  // sign out
  const signOutFunc=()=>{
    return signOut(auth)
  }

  const authInfo={
createUserFunc,
user,
loading,
setUser,
setLoading,
loginWithGoogle,
loginWIthEmailFunc,
signOutFunc,
  }
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;