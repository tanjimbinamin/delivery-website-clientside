import { useEffect, useState} from 'react'
import fireInit from '../Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";

fireInit()

const useFirebase = () => {
    const [user,setUser]=useState({})
    const [isLoading,setIsLoading]=useState(true)
  
    const provider = new GoogleAuthProvider()
    const auth=getAuth();

    const signIn=()=>{
      return signInWithPopup(auth,provider);
       
    }

    useEffect(()=>{
      const unsub=onAuthStateChanged(
        auth,(user)=>{
          if(user){
            setUser(user)
          }else{
            setUser('')
          }
          setIsLoading(false)
        })
        return()=>unsub()
    })

    const handleSignOut=()=>{
      return signOut(auth)
    }
    return {
        setUser,signIn,user,auth,provider,handleSignOut,setIsLoading,isLoading
    };
};

export default useFirebase;