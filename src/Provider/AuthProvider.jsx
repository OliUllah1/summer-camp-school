import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading] =useState(true)
    const [dark,setDark]=useState(false);
    const [role,setRole]=useState(null)
    
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut =()=>{
        return signOut(auth)
    }
    const updateUserNameAndPhoto =(user,name,photo)=>{
        return updateProfile(user,{displayName:name,photoURL:photo})
    }
    
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('currentUser login',currentUser)
             setUser(currentUser)
             setLoading(false)
         })
         return ()=>{
             return unsubscribe();
         }
     },[])
     useEffect(()=>{
        fetch(`http://localhost:5000/users?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setRole(data?.role))
    },[user])
    const authInfo ={
        createUser,
        signIn,
        loading,
        user,
        logOut,
        googleSignIn,
        updateUserNameAndPhoto,
        dark,
        setDark,
        role
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;