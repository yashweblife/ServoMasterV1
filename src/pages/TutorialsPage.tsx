import { generateId, IonCard, IonCardContent, IonCardHeader, IonContent, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const tutorial_list = [
    {
        id:generateId(),
        title:"Have a Device?"
    },
    {
        id:generateId(),
        title:"How Projects Work"
    }
]

const TutorialsPage:React.FC = ()=>{
    return(
    <IonPage>
        <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonToolbar>
                        <IonTitle>Adding A Device</IonTitle>
                    </IonToolbar>
                </IonCardHeader>
                <IonCardContent>
                    Learn how to add your ServoMaster Blox to your projects.
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
    )
}

export default TutorialsPage