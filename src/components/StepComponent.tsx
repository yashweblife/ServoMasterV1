import { IonAccordion, IonItem, IonIcon, IonLabel, IonList, IonRange, IonSegment, IonSegmentButton, IonButton } from "@ionic/react"
import { closeOutline } from "ionicons/icons"
import { useContext } from "react"
import { ProjectListContext } from "../store/project-list-context"
import "./StepComponent.scss"
const StepComponent:React.FC<{index:number}> = ({index})=>{
  const projectListContext = useContext(ProjectListContext)

  const removeStep = (index:number)=>{
    if(projectListContext){
      projectListContext.removeStep(index)
    }
  }
    return(
        (true)?
        <IonAccordion class="ion-margin-bottom" className="stepContainer">
        <IonItem slot="header" lines="none">
          <IonButton fill="clear" onClick={()=>{
            removeStep(index)
          }}>
          <IonIcon icon={closeOutline} color="primary"></IonIcon>
          </IonButton>
          <IonLabel>Step {index+1}</IonLabel>
        </IonItem>
        <IonItem slot="content" lines="none">
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
        <IonAccordion class="ion-margin-bottom" className="stepContainer">
        <IonItem slot="header" lines="none">
          <IonIcon icon={closeOutline} color="primary"></IonIcon>
          <IonLabel>Trigger</IonLabel>
        </IonItem>
        <IonItem slot="content" lines="none">
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