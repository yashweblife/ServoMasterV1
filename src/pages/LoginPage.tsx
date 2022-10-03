import { IonPage, IonContent, IonCard, IonCardHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonInput, IonCardContent, IonButton, IonButtons } from "@ionic/react"
import "./LoginPage.scss"
import { useContext, useState } from "react"
import { UserContext } from "../store/user-context"
const LoginPage:React.FC = ()=>{
    const [isLogin, setIsLogin] = useState<Boolean>(false)
    const userContext = useContext(UserContext)
    const handleLogin = ()=>{
        userContext?.login()
    }
    return(
        <IonPage>
            <IonContent className="authPage" fullscreen>
                {
                    (isLogin)?                
                    <IonCard className="authBox">
                        <IonCardHeader>
                            <IonToolbar>
                                <IonTitle>Login</IonTitle>
                            </IonToolbar>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonList>
                                <IonItem>
                                    <IonLabel slot="floating"></IonLabel>
                                    <IonInput>Enter Email</IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel slot="floating"></IonLabel>
                                    <IonInput>Enter Password</IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonButtons>    
                                        <IonButton fill="solid" color="primary" onClick={handleLogin}>Enter</IonButton>
                                        <IonButton fill="solid" color="primary" onClick={()=>{setIsLogin(false)}}>Create An Account</IonButton>
                                    </IonButtons>
                                </IonItem>
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                    :
                    <IonCard className="authBox">
                        <IonCardHeader>
                            <IonToolbar>
                                <IonTitle>Create An Account</IonTitle>
                            </IonToolbar>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonList>
                                <IonItem>
                                    <IonLabel slot="floating"></IonLabel>
                                    <IonInput>Enter Email</IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel slot="floating"></IonLabel>
                                    <IonInput>Enter Password</IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel slot="floating"></IonLabel>
                                    <IonInput>Confirm Password</IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonButtons>    
                                        <IonButton fill="solid" color="primary">Enter</IonButton>
                                        <IonButton fill="solid" color="primary" onClick={()=>{setIsLogin(true)}}>Login Instead</IonButton>
                                    </IonButtons>
                                </IonItem>
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                }
            </IonContent>
        </IonPage>
    )
}

export default LoginPage