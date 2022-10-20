import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { exitOutline, settingsOutline, trashOutline } from "ionicons/icons";
import { useContext } from "react";
import { DeviceListContext } from "../store/device-list-context";
import { ProjectListContext } from "../store/project-list-context";
import { UserContext } from "../store/user-context";
import "./Tab3.scss";

const Tab3: React.FC = () => {
  const userContext = useContext(UserContext);
  const projectContext = useContext(ProjectListContext);
  const deviceContext = useContext(DeviceListContext);
  const handleLogout = () => {
    userContext?.logout();
  };

  const handleDeleteAccount = () => {
    if (userContext) {
      userContext.delete();
    }
  };
  const handleDeleteAllProjects = () => {
    if (projectContext) {
      projectContext.deleteAll();
    }
  };
  const handleDeleteAllDevices = () => {
    if (deviceContext) {
      deviceContext.deleteAll();
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" fill="clear">
            <IonIcon icon={settingsOutline}></IonIcon>
          </IonButton>
          <IonTitle slot="end">Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonAccordionGroup class="ion-padding" className="settingsAccordion">
          <IonAccordion>
            <IonItem lines="none" slot="header">
              <IonLabel>Account</IonLabel>
            </IonItem>
            <IonItem lines="none" slot="content">
              <IonButton
                shape="round"
                color="primary"
                onClick={handleDeleteAccount}
              >
                <IonIcon icon={trashOutline}></IonIcon>
                <IonLabel>Delete Account</IonLabel>
              </IonButton>
              <IonButton shape="round" color="primary" onClick={handleLogout}>
                <IonIcon icon={exitOutline}></IonIcon>
                <IonLabel>Logout</IonLabel>
              </IonButton>
            </IonItem>
          </IonAccordion>
          <IonAccordion>
            <IonItem lines="none" slot="header">
              <IonLabel>Projects</IonLabel>
            </IonItem>
            <IonItem lines="none" slot="content">
              <IonButton
                shape="round"
                color="primary"
                onClick={handleDeleteAllProjects}
              >
                <IonIcon icon={trashOutline}></IonIcon>
                <IonLabel>Delete All</IonLabel>
              </IonButton>
            </IonItem>
          </IonAccordion>
          <IonAccordion>
            <IonItem lines="none" slot="header">
              <IonLabel>Devices</IonLabel>
            </IonItem>
            <IonItem lines="none" slot="content">
              <IonButton
                shape="round"
                color="primary"
                onClick={handleDeleteAllDevices}
              >
                <IonIcon icon={trashOutline}></IonIcon>
                <IonLabel>Delete All</IonLabel>
              </IonButton>
            </IonItem>
          </IonAccordion>
          <IonAccordion>
            <IonItem lines="none" slot="header">
              <IonLabel>Tutorials</IonLabel>
            </IonItem>
            <IonItem lines="none" slot="content">
              <IonButton shape="round" color="primary">
                <IonLabel>Setup</IonLabel>
              </IonButton>
              <IonButton shape="round" color="primary">
                <IonLabel>Projects</IonLabel>
              </IonButton>
              <IonButton
                shape="round"
                color="primary"
                onClick={() => {
                  console.log(4);
                }}
              >
                <IonLabel>Steps</IonLabel>
              </IonButton>
              <IonButton shape="round" color="primary">
                <IonLabel>Devices</IonLabel>
              </IonButton>
            </IonItem>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
