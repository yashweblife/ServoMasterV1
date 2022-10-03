import { IonCard, IonCardHeader, IonToolbar, IonTitle, IonCardContent, IonList, IonItem, IonLabel, IonInput, IonButtons, IonButton } from "@ionic/react"

const SignupComponent:React.FC<{switcher:()=>void}> = ({switcher})=>{
    const handleSignup = ()=>{
        
    }
    return(
    <IonCard className="authBox">
        <IonCardHeader>
            <IonToolbar>
                <IonTitle>Create An Account</IonTitle>
            </IonToolbar>
        </IonCardHeader>
        <IonCardContent>
            <IonList>
                <IonItem>
                    <IonLabel position="floating"></IonLabel>
                    <IonInput>Enter Email</IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating"></IonLabel>
                    <IonInput>Enter Password</IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating"></IonLabel>
                    <IonInput>Confirm Password</IonInput>
                </IonItem>
                <IonItem>
                    <IonButtons>    
                        <IonButton fill="solid" color="primary">Enter</IonButton>
                        <IonButton fill="solid" color="primary" onClick={switcher}>Login Instead</IonButton>
                    </IonButtons>
                </IonItem>
            </IonList>
        </IonCardContent>
    </IonCard>
    )
}

export default SignupComponent