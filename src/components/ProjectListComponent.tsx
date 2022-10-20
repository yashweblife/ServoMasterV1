import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert
} from "@ionic/react";
import { addOutline, listOutline } from "ionicons/icons";
import { useContext } from "react";
import { ProjectListContext } from "../store/project-list-context";
import { makeRandString, ProjectInterface } from "../utils/utils";
import ProjectComponent from "./ProjectComponent";
import "./ProjectListComponent.scss";

const ProjectListComponent: React.FC = () => {
  const projectListContext = useContext(ProjectListContext);
  const [alert] = useIonAlert();
  const addProject = (name: string) => {
    projectListContext?.add(name, makeRandString(10));
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="ion-padding-start">
          <IonIcon icon={listOutline} slot="start" color="primary"></IonIcon>
          <IonTitle size="large" slot="end">
            Projects
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            onClick={() => {
              alert({
                header: "Add a Project",
                inputs: [
                  {
                    placeholder: "Enter A Name",
                  },
                ],
                buttons: [
                  {
                    text: "Add",
                    handler: (data: any) => {
                      addProject(data[0]);
                    },
                  },
                  {
                    text: "Discard",
                  },
                ],
              });
            }}
          >
            <IonIcon icon={addOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
        {projectListContext?.size ? (
          <IonList className="projectList">
            {projectListContext.list?.map((item: ProjectInterface) => (
              <ProjectComponent data={item} key={item.id}></ProjectComponent>
            ))}
          </IonList>
        ) : (
          <div className="centerMessage">
            <IonLabel color="primary">Add a Project</IonLabel>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ProjectListComponent;
