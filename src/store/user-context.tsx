import { useIonAlert } from "@ionic/react";
import { createUserWithEmailAndPassword, onAuthStateChanged, deleteUser, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { makeRandString } from "../utils/utils";
import {auth} from "../utils/utils"

interface UserInterface{
    loginState:Boolean
    currentUserId:string;
    login:(email:string, pass:string)=>void;
    logout:()=>void;
}


const UserContext = createContext<UserInterface|null>(null)

export const UserContextProvider = (props:any)=>{
    const [alert] = useIonAlert()
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false)

    useEffect(()=>{
        onAuthStateChanged(auth, ()=>{
            if(auth.currentUser){
                setIsLoggedIn(true)
            }else{
                setIsLoggedIn(false)
            }
        })
    },[])

    const loginUser = (email:string, pass:string)=>{
        console.log(email)
        signInWithEmailAndPassword(auth, email, pass).then(()=>{console.log("Logged In")}).catch((err:Error)=>{
            console.log(err.message)
        })
    }
    const logoutUser = ()=>{
        signOut(auth)
    }
    const createUser = (email:string, pass:string, conf:string)=>{
        if(email == ""){
            alert({
                header:"Enter An Email",
                buttons:[{
                    text:"Confirm"
                }]
            })
            return
        }
        if(pass == ""){
            alert({
                header:"Enter A Password",
                buttons:[{
                    text:"Confirm"
                }]
            })
            return
        }
        if(pass!= conf){
            alert({
                header:"Password Doesnt Match",
                buttons:[{
                    text:"Confirm"
                }]
            })
            return;
        }
        createUserWithEmailAndPassword(auth, email, pass).then().catch((err:Error)=>{
            console.log(err.message)
        })
    }
    const editUser = ()=>{}
    const deleteCurrentUser = ()=>{
        if(auth.currentUser){
            deleteUser(auth.currentUser)
        }
    }

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