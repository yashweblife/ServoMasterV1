import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, DocumentData, getDocs, QuerySnapshot, updateDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import {
  auth,
  createStep,
  db,
  ProjectInterface,
  ProjectListInterface,
} from "../utils/utils";

export const ProjectListContext = createContext<ProjectListInterface | null>(
  null
);

export const ProjectListContextProvider = (props: any) => {
  const [list, setList] = useState<ProjectInterface[]>([]);
  const [currentProject, setCurrentProject] = useState<ProjectInterface | null>(
    null
  );
  useEffect(()=>{
    onAuthStateChanged(auth,()=>{
      if(auth.currentUser){
        getAllProjects()
      }
    })
  },[])
  const getAllProjects = ()=>{
    if(auth.currentUser){
      const ref = collection(db, "users", auth.currentUser.uid, "project_list")
      getDocs(ref).then((snap:QuerySnapshot)=>{
        const arr:ProjectInterface[] = []
        snap.docs.forEach((d:DocumentData)=>{
          const t = {
            id:d.id,
            name:d.data().name,
            steps:d.data().steps
          }
          arr.push(t)
        })
        setList(arr)
      })
    }
  }
  const add = (name: string, id: string) => {
    const ref = collection(db, "users", ""+auth.currentUser?.uid, "project_list")
    addDoc(ref,{
      name:name,
      steps:[]
    }).then((data:DocumentData)=>{
      if (list) {
        console.log(name);
        const arr = [...list];
        arr.push({
          name: name,
          steps: [],
          id: data.id,
        });
        setList(arr);
      } else {
        const arr = [];
        arr.push({
          name: name,
          steps: [],
          id: data.id,
        });
        setList(arr);
      }
    }).catch((err:Error)=>{
      console.log(err.message)
    })
  };
  const remove = (id: string) => {
    if (list) {
      const arr = list?.filter((item: ProjectInterface) => item.id != id);
      setList(arr);
      const ref = doc(db, "users", ""+auth.currentUser?.uid, "project_list", id)
      deleteDoc(ref).then(()=>{console.log("Deleted "+id)}).catch((err:Error)=>{console.log(err.message)})
    }
  };

  const openProject = (id: string) => {
    if (list) {
      const arr = [...list];
      const val = arr.filter((item: ProjectInterface) => item.id == id)[0];
      setCurrentProject(val);
    }
  };
  const closeProject = () => {
    setCurrentProject(null);
  };
  const addStep = () => {
    if (currentProject) {
      const c = { ...currentProject };
      c.steps.push(createStep());
      setCurrentProject(c);
    }
  };
  const removeStep = (index: number) => {
    if (currentProject) {
      const c = { ...currentProject };
      c.steps.splice(index, 1);
      setCurrentProject(c);
    }
  };
  const editStep = (index: number, type: number, value: any) => {
    if (currentProject) {
      const c = { ...currentProject };
      if (type === 0) c.steps[index].angle_start = value;
      if (type === 1) c.steps[index].angle_end = value;
      if (type === 2) c.steps[index].delay = value;
      if (type === 3) c.steps[index].size = value;
      if (type === 4) c.steps[index].servo = value;
      console.log(index, c.steps[index]);
    }
  };
  const summarizeProject = () => {
    if (currentProject) {
      const c = { ...currentProject };
      var op = "";
      c.steps.forEach((item) => {
        op += `${item.angle_end}|${item.angle_start}|${item.delay}|${item.servo}|${item.size}`;
      });
      console.log(op);
    }
  };
  const saveProject = ()=>{
    if(currentProject){
      const ref = doc(db, "users", ""+auth.currentUser?.uid, "project_list", currentProject.id)
      updateDoc(ref,{
        steps:currentProject.steps
      }).then(()=>{}).catch((err:Error)=>{console.log(err.message)})
    }
  }
  const context: ProjectListInterface = {
    list: list,
    size: list.length,
    add: add,
    remove: remove,
    open: openProject,
    close: closeProject,
    addStep: addStep,
    removeStep: removeStep,
    summarize: summarizeProject,
    current: currentProject,
    editStep: editStep,
  };
  return (
    <ProjectListContext.Provider value={context}>
      {props.children}
    </ProjectListContext.Provider>
  );
};
