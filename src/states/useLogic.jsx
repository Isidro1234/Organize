import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../config/firebase";
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from "./useAuth";

export const useLogic = create((set,get)=>({
  goals: [],
  fillGoal:[],
  loading:false,
  pageloaded:true,
  setLoading:async()=>{
    set({loading:true})
  },
  setLoadPage:async()=>{
    set({pageloaded:false})
  },
  setGoals : async(goal)=>{
    try {
      const anonymoususer = {
        username: "anonymous",

      }
      const uid = uuidv4()
      const createAnonymousAccount = await useAuth.getState().createuserProfile(anonymoususer, "goal" , uid )
      const queryDot = doc(db,"users",uid);
      const qdt = await getDocs(queryDot)
      if(qdt.docs.length > 0){
        return false
      }
      const docref = doc(db,"users",uid);
      const uploadGoal = await setDoc(docref,{
        id:docref.id,
        title:goal.title,
        description:goal.description,
        isShared:goal.isShared,
        isScheduled:goal.isScheduled,
        tasks:goal.tasks,
        members:goal.members, 
        watchers:goal.watchers,
        iscompleted:false,
        completePercentage:0,
        duration:goal.duration
    })  
    return true
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
    const ds = data.filter((_)=> _.iscompleted === false)
    console.log(ds)
    set({goals:data}) 
    } catch (error) {
        console.log(error.message)
    }
    
  },
  editGoal:async(goal)=>{
    try {
        const queryRef = query(collection(db,"Goals"),where("id","==",goal.id)); 
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
  AiGoals: async(goalrequest , duration , memberai , watcherai , scheduleai , resourceai )=>{
    try {
      const request = await fetch("http://localhost:5000/Organizex/Api/Ai/goals",{
        method:"POST",
        headers:{
        "Content-Type" : "application/json"
        },
        body:JSON.stringify({goalrequest , duration , memberai , watcherai , scheduleai, resourceai })
    });
    const res = await request.json();
    set({fillGoal:res})
    if(res){
       return res   
    }
    return false
    
    } catch (error) {
        console.log(error.message)
    }
    

  },
  AiTasks: async(goalrequest)=>{
    const request = await fetch("http://localhost:5000/Organizex/Api/Ai/tasks",{
        method:"POST",
        headers:{
        "Content-Type" : "application/json"
        },
        body:JSON.stringify({goalrequest})
    });
    const res =  request;

  }
}))