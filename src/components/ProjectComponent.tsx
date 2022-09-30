import { IonCard, IonCardHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from "@ionic/react"
import { trashOutline, playOutline, createOutline } from "ionicons/icons"
import { useContext } from "react"
import { ProjectInterface, ProjectListContext } from "../store/project-list-context"
import "./ProjectComponent.scss"

const ProjectComponent:React.FC<{data:ProjectInterface}> = ({data})=>{
  const projectListContext = useContext(ProjectListContext)
  const openProject = ()=>{
    if(projectListContext){
      projectListContext.open(data.id)
    }
  }
  const deleteProject = ()=>{
    if(projectListContext){
      projectListContext.remove(data.id)
    }
  }
    return(
        <IonCard className="projectCard">
              <IonCardHeader>
                <IonToolbar>
                  <IonTitle size='small' slot="start">{data.name}</IonTitle>
                  <IonButtons slot="end">
                    <IonButton fill="solid" color="primary" shape="round" onClick={deleteProject}>
                      <IonIcon icon={trashOutline}></IonIcon>
                    </IonButton>
                    <IonButton fill="solid" color="primary" shape="round">
                      <IonIcon icon={playOutline}></IonIcon>
                    </IonButton>
                    <IonButton fill="solid" color="primary" shape="round" onClick={()=>{
                      openProject()
                    }}>
                      <IonIcon icon={createOutline}></IonIcon>
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCardHeader>
        </IonCard>
    )
}

export default ProjectComponent