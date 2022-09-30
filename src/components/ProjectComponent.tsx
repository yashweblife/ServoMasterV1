import { IonCard, IonCardHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from "@ionic/react"
import { trashOutline, playOutline, createOutline } from "ionicons/icons"
import "./ProjectComponent.scss"

const ProjectComponent:React.FC = ()=>{
    return(
        <IonCard>
              <IonCardHeader>
                <IonToolbar>
                  <IonTitle size='small' slot="start">Project 1</IonTitle>
                  <IonButtons slot="end">
                    <IonButton fill="clear">
                      <IonIcon icon={trashOutline}></IonIcon>
                    </IonButton>
                    <IonButton fill="clear">
                      <IonIcon icon={playOutline}></IonIcon>
                    </IonButton>
                    <IonButton fill="clear">
                      <IonIcon icon={createOutline}></IonIcon>
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCardHeader>
        </IonCard>
    )
}

export default ProjectComponent