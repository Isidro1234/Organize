import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "../config/firebase"

export  const imageUrl = async(file)=>{
  const fileref = ref(storage,`docs/${file.name}`);
  const uploadfile = await uploadBytes(fileref, file);
  const url = await getDownloadURL(uploadfile.ref) 
  return url
}