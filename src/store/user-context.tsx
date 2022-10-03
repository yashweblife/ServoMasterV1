import { createContext, useState } from "react";
import { makeRandString } from "../utils/utils";


interface UserInterface{
    loginState:Boolean
    currentUserId:string;
    login:()=>void;
    logout:()=>void;
}


const UserContext = createContext<UserInterface|null>(null)

export const UserContextProvider = (props:any)=>{

    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false)

    const loginUser = ()=>{
        setIsLoggedIn(true)
    }
    const logoutUser = ()=>{
        setIsLoggedIn(false)
    }
    const createUser = ()=>{}
    const editUser = ()=>{}
    const deleteUser = ()=>{}

    const context = {
        loginState:isLoggedIn,
        currentUserId:makeRandString(),
        login:loginUser,
        logout:logoutUser,
    }
    return(
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext}