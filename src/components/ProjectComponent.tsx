import { IonCard, IonCardHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from "@ionic/react"
import { trashOutline, playOutline, createOutline } from "ionicons/icons"
import "./ProjectComponent.scss"

const ProjectComponent:React.FC = ()=>{
    return(
        <IonCard className="projectCard">
              <IonCardHeader>
                <IonToolbar>
                  <IonTitle size='small' slot="start">Project 1</IonTitle>
                  <IonButtons slot="end">
                    <IonButton fill="solid" color="primary" shape="round">
                      <IonIcon icon={trashOutline}></IonIcon>
                    </IonButton>
                    <IonButton fill="solid" color="primary" shape="round">
                      <IonIcon icon={playOutline}></IonIcon>
                    </IonButton>
                    <IonButton fill="solid" color="primary" shape="round">
                      <IonIcon icon={createOutline}></IonIcon>
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCardHeader>
        </IonCard>
    )
}

export default ProjectComponent