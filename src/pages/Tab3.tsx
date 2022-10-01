import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonChip,
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
import "./Tab3.scss";

const Tab3: React.FC = () => {
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
              <IonButton shape="round" color="primary">
                <IonIcon icon={trashOutline}></IonIcon>
                <IonLabel>Delete Account</IonLabel>
              </IonButton>
              <IonButton shape="round" color="primary">
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
              <IonButton shape="round" color="primary">
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
              <IonButton shape="round" color="primary">
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
              <IonButton shape="round" color="primary">
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
