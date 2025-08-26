import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../config/firebase";


export const useLogic = create((set,get)=>({
  goals: [],
  setGoals : async(goal)=>{
    try {
      const docref = doc(collection(db,"Goals"));
      const uploadGoal = await setDoc(docref,{
        id:docref.id,
        title:goal.title,
        description:goal.description,
        isShared:goal.isShared,
        isScheduled:goal.isScheduled,
        tasks:goal.tasks,
        members:goal.members, 
        watchers:goal.watchers
    })  
    } catch (error) {
        console.log(error.message)
    }
  },
  getGoals:async()=>{
    try {
       const Goals = await getDocs(collection(db,"Goals"));
    const data = []
    Goals.docs.forEach((item)=>{
        data.push(item.data())
    }) 
    set({goals:data}) 
    } catch (error) {
        console.log(error.message)
    }
    
  },
  editGoal:async(goal)=>{
    try {
        const queryRef = query(collection(db,"Goals",where("id","==",goal.id))); 
    await updateDoc(queryRef,{
        time:goal.time,
        title:goal.title,
        description:goal.description,
        isShared:goal.isShared,
        isScheduled:goal.isScheduled,
        tasks:goal.tasks,
        members:goal.members, 
    }) 
    } catch (error) {
        console.log(error.message)
    }
  },
  AiGoals: async()=>{

  },
  AiTasks: async()=>{

  }
}))