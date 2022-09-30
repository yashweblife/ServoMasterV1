import { IonPage, IonHeader, IonToolbar, IonButton, IonIcon, IonTitle, IonContent, IonFab, IonFabButton, IonFabList, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonList, IonRange, IonSegment, IonSegmentButton } from "@ionic/react"
import "./EditorComponent.scss"
import { arrowBackOutline, menuOutline, addOutline, saveOutline, trashOutline, closeOutline } from "ionicons/icons"
import StepComponent from "./StepComponent"

const EditorComponent:React.FC = ()=>{
    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButton slot="start" fill="clear">
              <IonIcon color="primary" icon={arrowBackOutline}></IonIcon>
            </IonButton>
            <IonTitle slot="end">Editor</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonFab vertical='bottom' horizontal='end' slot='fixed'>
            <IonFabButton color="primary">
              <IonIcon icon={menuOutline}></IonIcon>
            </IonFabButton>
            <IonFabList side="start">
              <IonFabButton color="primary">
                <IonIcon icon={addOutline}></IonIcon>
              </IonFabButton>
              <IonFabButton color="primary">
                <IonIcon icon={addOutline}></IonIcon>
              </IonFabButton>
              <IonFabButton color="primary">
                <IonIcon icon={addOutline}></IonIcon>
              </IonFabButton>
            </IonFabList>
            <IonFabList side="top">
              <IonFabButton color="primary">
                <IonIcon icon={saveOutline}></IonIcon>
              </IonFabButton>
              <IonFabButton color="primary">
                <IonIcon icon={trashOutline}></IonIcon>
              </IonFabButton>
            </IonFabList>
          </IonFab>
          <IonAccordionGroup class="ion-padding">
            <StepComponent/>  
          </IonAccordionGroup>
        </IonContent>
      </IonPage>
    )
}

export default EditorComponent