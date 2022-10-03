import {
  IonAccordionGroup,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  addOutline,
  arrowBackOutline,
  menuOutline,
  playOutline,
  saveOutline,
  trashOutline,
} from "ionicons/icons";
import { useContext } from "react";
import { DeviceListContext } from "../store/device-list-context";
import { ProjectListContext } from "../store/project-list-context";
import { DeviceInterface, StepInterface } from "../utils/utils";
import "./EditorComponent.scss";
import StepComponent from "./StepComponent";

const EditorComponent: React.FC = () => {
  const projectListContext = useContext(ProjectListContext);
  const deviceListContext = useContext(DeviceListContext);
  const toProjectList = () => {
    if (projectListContext) {
      projectListContext.close();
    }
  };
  const addStep = () => {
    if (projectListContext) {
      projectListContext.addStep();
    }
  };
  const summarize = () => {
    if (projectListContext) {
      projectListContext.summarize();
    }
  };

  const saveProject = () => {};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton
            slot="start"
            fill="clear"
            onClick={() => {
              toProjectList();
            }}
          >
            <IonIcon color="primary" icon={arrowBackOutline}></IonIcon>
          </IonButton>
          <IonTitle slot="end">Editor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle slot="start">
              {projectListContext && projectListContext.current?.name}
            </IonTitle>
            <IonSelect placeholder="Select A Device" slot="end">
              {deviceListContext &&
                deviceListContext.list.map((item: DeviceInterface) => (
                  <IonSelectOption value={item.auth}>
                    {item.name}
                  </IonSelectOption>
                ))}
            </IonSelect>
          </IonToolbar>
        </IonHeader>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
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
            <IonFabButton color="primary" onClick={() => summarize}>
              <IonIcon icon={playOutline}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
        {projectListContext?.current?.steps?.length ? (
          <IonAccordionGroup class="ion-padding" className="stepList">
            {projectListContext.current.steps.map(
              (item: StepInterface, index: number) => {
                return <StepComponent index={index} data={item} key={index} />;
              }
            )}
          </IonAccordionGroup>
        ) : (
          <div className="centerMessage">
            <IonLabel color="primary">Add a Step</IonLabel>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default EditorComponent;
