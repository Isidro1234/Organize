import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { create } from "zustand";
import { auth } from "../config/firebase";



export const useAuth = create((set,get)=>({
    SignUp:async(username , email,  password)=>{
        try {
         const credentials = await createUserWithEmailAndPassword(auth, email, password); 
         if(credentials.user.email){
            return true
         } 
         await updateProfile({
            displayName:username,
         })  
        } catch (error) {
          console.log(error.message)  
        }
        
    },
    Login:async(email,password)=>{
        try {
           const credentials = await signInWithEmailAndPassword(auth, email, password);
           if(credentials.user.displayName){
            return true
           } 
        } catch (error) {
            console.log(error.message)
        }
    }
}))