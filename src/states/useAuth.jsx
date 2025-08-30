import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { create } from "zustand";
import { auth, db } from "../config/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { data } from "react-router";



export const useAuth = create((set,get)=>({
    SignUp:async(username , email,  password)=>{
        try {
         const credentials = await createUserWithEmailAndPassword(auth, email, password); 
         if(credentials.user.email){
            const data = {
                username,
                credentials
            }
            await get().createuserProfile(data,"sign", false)
            await updateProfile(credentials.user,{
                displayName:username
            })  
            return true
         } 
         
        } catch (error) {
          console.log(error.message)  
        }
        
    },
    Login:async(email,password)=>{
        try {
           const credentials = await signInWithEmailAndPassword(auth, email, password);
           if(credentials.user.uid){
            return true
           }
        } catch (error) {
            console.log(error.message)
        }
    },
    createuserProfile:async(data , from , random)=>{
        const dataId = from == "sign" ? data.credentials.user.uid : random 
        const docref = doc(db,"users", dataId);
        await setDoc(docref,{
                id:docref.id,
                username: data.username,
                followers:0,
                friends:0
        })
    }
}))