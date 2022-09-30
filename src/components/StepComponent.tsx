import { IonAccordion, IonItem, IonIcon, IonLabel, IonList, IonRange, IonSegment, IonSegmentButton } from "@ionic/react"
import { closeOutline } from "ionicons/icons"
import "./StepComponent.scss"
const StepComponent:React.FC = ()=>{
    return(
        (false)?
        <IonAccordion class="ion-margin-bottom">
        <IonItem slot="header">
          <IonIcon icon={closeOutline}></IonIcon>
          <IonLabel>Step 1</IonLabel>
        </IonItem>
        <IonItem slot="content" class="ion-">
          <IonList>
            <div>
              <IonLabel>Start</IonLabel>
              <IonRange min={0} max={180} value={20}></IonRange>
            </div>
            <div>
              <IonLabel>Start</IonLabel>
              <IonRange min={0} max={180} value={20}></IonRange>
            </div>
            <div>
              <IonLabel>Start</IonLabel>
              <IonRange min={0} max={180} value={20}></IonRange>
            </div>
            <div>
              <IonLabel>Start</IonLabel>
              <IonRange min={0} max={180} value={20}></IonRange>
            </div>
            <div>
              <IonSegment>
                <IonSegmentButton><IonLabel>S1</IonLabel></IonSegmentButton>
                <IonSegmentButton><IonLabel>S2</IonLabel></IonSegmentButton>
                <IonSegmentButton><IonLabel>S3</IonLabel></IonSegmentButton>
                <IonSegmentButton><IonLabel>S4</IonLabel></IonSegmentButton>
              </IonSegment>
            </div>
          </IonList>
        </IonItem>
        </IonAccordion>
        :
        <IonAccordion class="ion-margin-bottom">
        <IonItem slot="header">
          <IonIcon icon={closeOutline}></IonIcon>
          <IonLabel>Trigger</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonList>
            <div>
              <IonSegment>
                <IonSegmentButton><IonLabel>I1</IonLabel></IonSegmentButton>
                <IonSegmentButton><IonLabel>I2</IonLabel></IonSegmentButton>
                <IonSegmentButton><IonLabel>I3</IonLabel></IonSegmentButton>
                <IonSegmentButton><IonLabel>I4</IonLabel></IonSegmentButton>
              </IonSegment>
            </div>
          </IonList>
        </IonItem>
        </IonAccordion>
    //   <IonAccordion class="ion-margin-bottom">
    //     <IonItem slot="header">
    //       <IonIcon icon={closeOutline}></IonIcon>
    //       <IonLabel>Delay</IonLabel>
    //     </IonItem>
    //     <IonItem slot="content">
    //       <IonList>
    //         <div>
    //           <IonLabel>Delay</IonLabel>
    //           <IonRange min={0} max={180} value={20}></IonRange>
    //         </div>
    //       </IonList>
    //     </IonItem>
    //   </IonAccordion>
    )
}

export default StepComponent