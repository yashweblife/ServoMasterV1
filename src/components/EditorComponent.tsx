import { IonPage, IonHeader, IonToolbar, IonButton, IonIcon, IonTitle, IonContent, IonFab, IonFabButton, IonFabList, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonList, IonRange, IonSegment, IonSegmentButton } from "@ionic/react"
import "./EditorComponent.scss"
import { arrowBackOutline, menuOutline, addOutline, saveOutline, trashOutline, closeOutline, playOutline } from "ionicons/icons"
import StepComponent from "./StepComponent"
import { useContext } from "react"
import { ProjectListContext, StepInterface } from "../store/project-list-context"

const EditorComponent:React.FC = ()=>{
  const projectListContext = useContext(ProjectListContext)
  const toProjectList = ()=>{
    if(projectListContext){
      projectListContext.close()
    }
  }
  const addStep = ()=>{
    if(projectListContext){
      projectListContext.addStep()
    }
  }
  const summarize = ()=>{
    if(projectListContext){projectListContext.summarize()}
  }
    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButton slot="start" fill="clear" onClick={()=>{
              toProjectList()
            }}>
              <IonIcon color="primary" icon={arrowBackOutline}></IonIcon>
            </IonButton>
            <IonTitle slot="end">Editor</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader>
            <IonToolbar>
              <IonTitle>
                {
                  projectListContext&&projectListContext.current?.name
                }
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonFab vertical='bottom' horizontal='end' slot='fixed'>
            <IonFabButton color="primary">
              <IonIcon icon={menuOutline}></IonIcon>
            </IonFabButton>
            <IonFabList side="start">
              <IonFabButton color="primary" onClick={addStep}>
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
              <IonFabButton color="primary" onClick={()=>summarize}>
                <IonIcon icon={playOutline}></IonIcon>
              </IonFabButton>
            </IonFabList>
          </IonFab>
          {
            (projectListContext?.current?.steps?.length) ?
            <IonAccordionGroup class="ion-padding" className="stepList">
              {
                projectListContext.current.steps.map((item:StepInterface, index:number)=>{
                  return(<StepComponent index={index}/>)
                })
              }
            </IonAccordionGroup>
            
            : 
          <div className="centerMessage">
            <IonLabel color="primary">
              Add a Step
            </IonLabel>
          </div>
          }
        </IonContent>
      </IonPage>
    )
}

export default EditorComponent