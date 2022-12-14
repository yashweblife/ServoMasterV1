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
  useIonAlert
} from "@ionic/react";
import {
  alarmOutline,
  arrowBackOutline,
  bulbOutline,
  footstepsOutline,
  menuOutline,
  playOutline,
  saveOutline,
  trashOutline
} from "ionicons/icons";
import { useContext, useEffect, useState } from "react";
import { DeviceListContext } from "../store/device-list-context";
import { ProjectListContext } from "../store/project-list-context";
import { DeviceInterface, StepInterface } from "../utils/utils";
import "./EditorComponent.scss";
import StepComponent from "./StepComponent";
/**
 * * A place to edit projects
 * @returns The editor component 
 */
const EditorComponent: React.FC = () => {
  const projectListContext = useContext(ProjectListContext);
  const deviceListContext = useContext(DeviceListContext);
  const [alert] = useIonAlert();
  const [device, setDevice] = useState<string>("")
  useEffect(()=>{
    window.addEventListener("keydown",(e:KeyboardEvent)=>{
      if(e.key === "s" && e.ctrlKey){
        e.preventDefault();
        saveProject();
      }
      if(e.key === "a" && e.ctrlKey){
        e.preventDefault();
        addStep()
      }
    })
  },[])
  /**
   * Return to the project list
   */
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
      if(device){
        //console.log("Device Selected: ")
        projectListContext.summarize(projectListContext.current?.id, device);
      }else{
        alert({
          header:"Select a device First",
          buttons:[
            {
              text:"Accept"
            }
          ]
        })
      }
    }
  };

  const saveProject = () => {
    if(projectListContext){
      projectListContext.save();
    }
  };

  const deleteProject = ()=>{
    if(projectListContext && projectListContext.current){
      projectListContext.remove(projectListContext.current.id)
    }
  }

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
            <IonSelect placeholder="Select A Device" interface="popover" slot="end" onIonChange={(e:any)=>{setDevice(e.detail.value)}}>
              {deviceListContext &&
                deviceListContext.list.map((item: DeviceInterface, index:number) => (
                  <IonSelectOption value={item.auth} key={index}>
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
              <IonIcon icon={footstepsOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton color="primary">
              <IonIcon icon={alarmOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton color="primary">
              <IonIcon icon={bulbOutline}></IonIcon>
            </IonFabButton>
          </IonFabList>
          <IonFabList side="top">
            <IonFabButton color="primary" onClick={saveProject}>
              <IonIcon icon={saveOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton color="primary" onClick={deleteProject}>
              <IonIcon icon={trashOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton color="primary" onClick={summarize}>
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
