import { createContext, useState } from "react";

export interface StepInterface{
    angle_end:number;
    angle_start:number;
    delay:number;
    name:string;
    servo:number;
    size:number;
    type:string
}
  
export interface ProjectInterface{
    name:string,
    steps:StepInterface[],
    id:string
}

export interface ProjectListInterface{
    list:ProjectInterface[] | null,
    add:(name:string, id:string)=>void,
    remove:(id:string)=>void,
    open:(id:string)=>void
}
export const ProjectListContext=createContext<ProjectListInterface|null>(null)

export const ProjectListContextProvider = (props:any)=>{
    const [list, setList] = useState<ProjectInterface[]|null>(null)
    const [currentProject,setCurrentProject] = useState<ProjectInterface|null>(null)
    const add = (name:string, id:string)=>{
        if(list){
            const arr = [...list]
            arr.push({
                name:name,
                steps:[],
                id:id
            })
            setList(arr)
        }
    }
    const remove = (id:string)=>{
        if(list){
            const arr = list?.filter((item:ProjectInterface)=>item.id!=id)
            setList(arr)
        }
    }

    const openProject = (id:string)=>{
        if(list){
            const arr = [...list]
            const val = arr.filter((item:ProjectInterface)=>item.id==id)[0]
            setCurrentProject(val);
        }
    }

    const context:ProjectListInterface = {
        list:list,
        add:add,
        remove:remove,
        open:openProject
    }
    return(
        <ProjectListContext.Provider value={context}>{props.children}</ProjectListContext.Provider>
    )
}