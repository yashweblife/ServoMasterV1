import { IonPage, IonHeader, IonToolbar, IonIcon, IonTitle, IonContent, IonFab, IonFabButton, IonList, IonCard, IonCardHeader, IonButtons, IonButton, IonLabel } from "@ionic/react"
import { listOutline, addOutline, trashOutline, playOutline, createOutline } from "ionicons/icons"
import "./ProjectListComponent.scss"
import ProjectComponent from "./ProjectComponent"

const ProjectListComponent:React.FC = ()=>{
    return(
    <IonPage>
      <IonHeader>
        <IonToolbar class="ion-padding-start">
          <IonIcon icon={listOutline} slot="start" color="primary"></IonIcon>
          <IonTitle size="large" slot="end">Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonFab vertical='bottom' horizontal='end' slot='fixed'>
          <IonFabButton>
            <IonIcon icon={addOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
        {
          (false) ? 
        
          <IonList className="projectList">
            <ProjectComponent/>              
          </IonList>
        :
          <div className="centerMessage">
            <IonLabel color="primary">
              Add a Project
            </IonLabel>
          </div>
        }
      </IonContent>
    </IonPage>
    )
}

export default ProjectListComponent