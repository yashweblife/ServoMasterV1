import { IonCard, IonCardContent, IonCardHeader, IonContent, IonPage, IonTitle, IonToolbar } from "@ionic/react"

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
            <IonCard>
                <IonCardHeader>
                    <IonToolbar>
                        <IonTitle>Adding a Project</IonTitle>
                    </IonToolbar>
                </IonCardHeader>
                <IonCardContent>
                    Learn how to add a project.
                </IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonToolbar>
                        <IonTitle>Edit your projects</IonTitle>
                    </IonToolbar>
                </IonCardHeader>
                <IonCardContent>
                    Learn what you can do with your projects.
                </IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonToolbar>
                        <IonTitle>Tips and Tricks</IonTitle>
                    </IonToolbar>
                </IonCardHeader>
                <IonCardContent>
                    Learn some cool things you can do.
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
    )
}

export default TutorialsPage