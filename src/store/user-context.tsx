import { useIonAlert } from "@ionic/react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, DocumentData, getDocs, QuerySnapshot, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db, makeRandString } from "../utils/utils";

interface UserInterface {
  loginState: Boolean;
  currentUserId: string;
  login: (email: string, pass: string) => void;
  logout: () => void;
  create:(email:string,pass:string,conf:string)=>void,
  delete:()=>void
}

const UserContext = createContext<UserInterface | null>(null);

export const UserContextProvider = (props: any) => {
  const [alert] = useIonAlert();
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      if (auth.currentUser) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const loginUser = (email: string, pass: string) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        console.log("Logged In");
      })
      .catch((err: Error) => {
        console.log(err.message);
        alert({
          header:err.message,
          buttons:[{text:"Confirm"}]
        })
      });
  };
  const logoutUser = () => {
    signOut(auth);
  };
  const createUser = (email: string, pass: string, conf: string) => {
    if (email == "") {
      alert({
        header: "Enter An Email",
        buttons: [
          {
            text: "Confirm",
          },
        ],
      });
      return;
    }
    if(!email.includes("@")){
      alert({
        header: "Enter a valid email",
        buttons: [
          {
            text: "Confirm",
          },
        ],
      });
      return;
    }
    if (pass == "") {
      alert({
        header: "Enter A Password",
        buttons: [
          {
            text: "Confirm",
          },
        ],
      });
      return;
    }
    if(pass.length<8){
      alert({
        header: "Password is too short (atleast 8 characters)",
        buttons: [
          {
            text: "Confirm",
          },
        ],
      });
      return;
    }
    if (pass != conf) {
      alert({
        header: "Password Doesnt Match",
        buttons: [
          {
            text: "Confirm",
          },
        ],
      });
      return;
    }
    createUserWithEmailAndPassword(auth, email, pass)
      .then(()=>{
        createUserDB()
      })
      .catch((err: Error) => {
        console.log(err.message);
      });
  };
  const createUserDB = ()=>{
    if(auth.currentUser){
      const ref = doc(db, "users", auth.currentUser.uid)
      const pref = collection(ref,"project_list")
      const dref = collection(ref,"device_list")
      setDoc(ref,{
        email:auth.currentUser.email
      }).then(()=>{
        addDoc(pref,{
          name:"Your First Project",
          steps:[]
        })
      })
    }
  }
  const editUser = () => {};
  const deleteCurrentUser = () => {
    if (auth.currentUser) {
      const ref = doc(db,"users",auth.currentUser.uid)
      const pref = collection(ref,"project_list")
      const dref = collection(ref,"device_list")

      getDocs(pref).then((snap:QuerySnapshot)=>{
        if(!snap.empty){
          snap.docs.forEach((d:DocumentData)=>{
            deleteDoc(doc(pref, d.id))
          })
        }
      }).then(()=>{
        getDocs(dref).then((snap:QuerySnapshot)=>{
          if(!snap.empty){
            snap.docs.forEach((d:DocumentData)=>{
              deleteDoc(doc(dref, d.id))
            })
          }
        }).then(()=>{
          if(auth.currentUser){
            deleteUser(auth.currentUser)
          }
        })
      })
    }
  };

  const context = {
    loginState: isLoggedIn,
    currentUserId: makeRandString(),
    login: loginUser,
    logout: logoutUser,
    create:createUser,
    delete:deleteCurrentUser
  };
  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext };
