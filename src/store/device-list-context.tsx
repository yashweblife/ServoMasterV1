import { useIonToast } from "@ionic/react";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, DocumentData, getDocs, QuerySnapshot, updateDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import {
  auth,
  db,
  DeviceContextInterface,
  DeviceInterface,
  makeRandString,
} from "../utils/utils";

export const DeviceListContext = createContext<DeviceContextInterface | null>(
  null
);

export const DeviceListContextProvider = (props: any) => {
  const [list, setList] = useState<DeviceInterface[]>([]);
  const [toast] = useIonToast()
  useEffect(()=>{
    onAuthStateChanged(auth, ()=>{
      if(auth.currentUser){
        loadAllDevices()
      }
    })
  },[])
  const add = (name: string, authCode: string) => {
    if(auth.currentUser){
      const ref = collection(db, "users", auth.currentUser.uid, "device_list")
      addDoc(ref, {
        name:name,
        auth:authCode
      }).then((data:DocumentData)=>{
        const t = {
          id: data.id,
          name: name,
          auth: authCode,
        };
        const arr = [...list];
        arr.push(t);
        setList(arr);
      }).catch((err:Error)=>{
        console.log(err.message)
      })
    }
  };
  const loadAllDevices = ()=>{
    if(auth.currentUser){
      const ref = collection(db, "users", auth.currentUser.uid, "device_list");
      getDocs(ref).then((snap:QuerySnapshot)=>{
        const arr:DeviceInterface[] = []
        snap.forEach((d:DocumentData)=>{
          const t = {
            name:d.data().name,
            id:d.id,
            auth:d.data().auth
          }
          arr.push(t)
        })
        setList(arr)
      })
    }
  }
  const remove = (id: string) => {
    const arr = [...list];
    const op = arr.filter((item: DeviceInterface) => item.id != id);
    setList(op);
    if(auth.currentUser){
      const ref = doc(db, "users", auth.currentUser.uid, "device_list", id)
      deleteDoc(ref).then(()=>{}).catch((err:Error)=>{console.log(err.message)})
    }
  };
  const removeAll = ()=>{
    const ref = collection(
      db,
      "users",
      "" + auth.currentUser?.uid,
      "device_list"
    );
    getDocs(ref).then((snap:QuerySnapshot)=>{
      snap.forEach((d:DocumentData)=>{
        remove(d.id)
      })
    }).then(()=>{
      toast({
        message:"Deleted All Projects"
      })
    })
  }
  const edit = (id: string, name: string, authCode: string) => {
    const arr = [...list];
    const data = arr.filter((item: DeviceInterface) => item.id === id)[0];
    if (data) {
      data.name = name;
      data.auth = authCode;
    }
    setList(arr);
    if(auth.currentUser){
      const ref = doc(db, "users", auth.currentUser.uid, "device_list", id)
      updateDoc(ref,{
        name:name,
        auth:auth
      }).then(()=>{}).catch((err:Error)=>{console.log(err.message)})
    }
  };
  const context = {
    list: list,
    size: list.length,
    add: add,
    remove: remove,
    edit: edit,
    deleteAll:removeAll
  };

  return (
    <DeviceListContext.Provider value={context}>
      {props.children}
    </DeviceListContext.Provider>
  );
};
