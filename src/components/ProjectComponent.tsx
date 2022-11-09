import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  useIonAlert
} from "@ionic/react";
import { createOutline, playOutline, shareSocialOutline, trashOutline } from "ionicons/icons";
import { useContext } from "react";
import { ProjectListContext } from "../store/project-list-context";
import { ProjectInterface } from "../utils/utils";
import "./ProjectComponent.scss";
/**
 * Item component for project list
 * @param param0 
 * @returns 
 */
const ProjectComponent: React.FC<{ data: ProjectInterface }> = ({ data }) => {
  const projectListContext = useContext(ProjectListContext);
  const [alert] = useIonAlert()
  const openProject = () => {
    if (projectListContext) {
      projectListContext.open(data.id);
    }
  };
  const deleteProject = () => {
    if (projectListContext) {
      projectListContext.remove(data.id);
    }
  };
  const summarize = () => {
    projectListContext?.summarize(data.id);
  };
  const shareProject = (email:string)=>{
    projectListContext?.share(data.id, email)
  }
  return (
    <IonCard className="projectCard">
      <IonCardHeader>
        <IonToolbar>
          <IonTitle size="small">
            {data.name}
          </IonTitle>
          <IonButtons slot="end">
            <IonButton
              fill="solid"
              color="primary"
              shape="round"
              onClick={deleteProject}
            >
              <IonIcon icon={trashOutline}></IonIcon>
            </IonButton>
            <IonButton
              fill="solid"
              color="primary"
              shape="round"
              onClick={summarize}
            >
              <IonIcon icon={playOutline}></IonIcon>
            </IonButton>
            <IonButton
              fill="solid"
              color="primary"
              shape="round"
              onClick={() => {
                openProject();
              }}
            >
              <IonIcon icon={createOutline}></IonIcon>
            </IonButton>
            <IonButton
              fill="solid"
              color="primary"
              shape="round"
              onClick={() => {
                alert({
                  header:"Share your project",
                  inputs:[{
                    placeholder:"Enter Email",
                  }],
                  buttons:[{
                    text:"Send",
                    handler:(data:any)=>{
                      shareProject(data[0])
                    }
                  },{
                    text:"Discard",
                  }]
                })
              }}
            >
              <IonIcon icon={shareSocialOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonCardHeader>
    </IonCard>
  );
};

export default ProjectComponent;
