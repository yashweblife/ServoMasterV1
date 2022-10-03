import { IonPage, IonContent, IonCard, IonCardHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonInput, IonCardContent, IonButton, IonButtons } from "@ionic/react"
import "./LoginPage.scss"
import { useContext, useState } from "react"
import { UserContext } from "../store/user-context"
import LoginComponent from "../components/LoginComponent"
import SignupComponent from "../components/SignupComponent"
const LoginPage:React.FC = ()=>{
    const [isLogin, setIsLogin] = useState<Boolean>(true)
    const userContext = useContext(UserContext)
    return(
        <IonPage>
            <IonContent className="authPage" fullscreen>
                {
                    (isLogin)?                
                    <LoginComponent switcher={()=>{setIsLogin(false)}}/>
                    :
                    <SignupComponent switcher={()=>{setIsLogin(true)}}/>
                }
            </IonContent>
        </IonPage>
    )
}

export default LoginPage