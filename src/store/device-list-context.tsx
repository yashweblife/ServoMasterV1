import { createContext, useState } from "react"
import { makeRandString } from "../utils/utils"

export interface DeviceInterface{
    name:string,
    auth:string,
    id:string
}

export interface DeviceContextInterface{
    list:DeviceInterface[],
    size:number,
    add:(name:string, auth:string)=>void
    remove:(id:string)=>void,
    edit:(id:string,name:string,auth:string)=>void
}

export const DeviceListContext = createContext<DeviceContextInterface|null>(null)

export const DeviceListContextProvider = (props:any)=>{
    const [list,setList] = useState<DeviceInterface[]>([])
    const add = (name:string, auth:string)=>{
        const t = {
            id:makeRandString(),
            name:name,
            auth:auth
        }
        const arr = [...list]
        arr.push(t)
        setList(arr)
    }
    const remove = (id:string)=>{
        const arr = [...list]
        arr.filter((item:DeviceInterface)=>item.id!=id)
        setList(arr)
    }
    const edit = (id:string,name:string, auth:string)=>{
        const arr = [...list]
        const data = arr.filter((item:DeviceInterface)=>item.id===id)[0]
        if(data){
            data.name = name,
            data.auth = auth
        }
    }
    const context = {
        list:list,
        size:list.length,
        add:add,
        remove:remove,
        edit:edit
    }

    return(
        <DeviceListContext.Provider value={context}>
            {
                props.children
            }
        </DeviceListContext.Provider>
    )

}