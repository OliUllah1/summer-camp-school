import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState({})
    const [loading,setLoading] =useState(true)
    const [dark,setDark]=useState(false);
    
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
             if(currentUser){
                axios.post('https://summer-camp-school-server-mu.vercel.app/jwt',{
                email:currentUser.email
             })
             .then(data=>{
                
                localStorage.setItem('access-token',data.data.token)
             })
             }
             else{
                localStorage.removeItem('access-token')
             }
             
             setLoading(false)
         })
         
         return ()=>{
             return unsubscribe();
         }
     },[])

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