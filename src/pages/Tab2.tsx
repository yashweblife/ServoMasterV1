import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  addOutline,
  eyeOutline,
  pencilOutline,
  personOutline,
  trashOutline,
} from "ionicons/icons";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Tab2.scss";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" fill="clear">
            <IonIcon icon={personOutline}></IonIcon>
          </IonButton>
          <IonTitle slot="end">Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem lines="none">
            <IonCard className="progressCard">
              <IonCardContent>
                <CircularProgressbar
                  value={1}
                  minValue={0}
                  maxValue={50}
                  text={`${0} ${false ? "Projects" : "Project"}`}
                  styles={buildStyles({
                    pathColor: "#50FFC0",
                    trailColor: "#1f2e39",
                    textColor: "#50FFC0",
                    textSize: "10px",
                    strokeLinecap: "round",
                  })}
                />
              </IonCardContent>

              <IonCard></IonCard>
            </IonCard>
            <IonCard className="progressCard">
              <IonCardContent>
                <CircularProgressbar
                  value={1}
                  minValue={0}
                  maxValue={50}
                  text={`${0} ${false ? "Projects" : "Project"}`}
                  styles={buildStyles({
                    pathColor: "#50FFC0",
                    trailColor: "#1f2e39",
                    textColor: "#50FFC0",
                    textSize: "10px",
                    strokeLinecap: "round",
                  })}
                />
              </IonCardContent>

              <IonCard></IonCard>
            </IonCard>
          </IonItem>
        </IonList>
        <IonList>
          <IonCard>
            <IonCardHeader>
              <IonToolbar>
                <IonTitle slot="start">Devices</IonTitle>
                <IonButton slot="end" fill="clear">
                  <IonIcon icon={addOutline}></IonIcon>
                </IonButton>
              </IonToolbar>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonCard>
                  <IonCardHeader>
                    <IonToolbar>
                      <IonTitle slot="start">Device 1</IonTitle>
                      <IonButtons slot="end">
                        <IonButton fill="solid" shape="round" color="primary">
                          <IonIcon icon={pencilOutline}></IonIcon>
                        </IonButton>
                        <IonButton fill="solid" shape="round" color="primary">
                          <IonIcon icon={eyeOutline}></IonIcon>
                        </IonButton>
                        <IonButton fill="solid" shape="round" color="primary">
                          <IonIcon icon={trashOutline}></IonIcon>
                        </IonButton>
                      </IonButtons>
                    </IonToolbar>
                  </IonCardHeader>
                </IonCard>
                <IonCard>
                  <IonCardHeader>
                    <IonToolbar>
                      <IonTitle slot="start">Device 1</IonTitle>
                      <IonButtons slot="end">
                        <IonButton fill="solid" shape="round" color="primary">
                          <IonIcon icon={pencilOutline}></IonIcon>
                        </IonButton>
                        <IonButton fill="solid" shape="round" color="primary">
                          <IonIcon icon={eyeOutline}></IonIcon>
                        </IonButton>
                        <IonButton fill="solid" shape="round" color="primary">
                          <IonIcon icon={trashOutline}></IonIcon>
                        </IonButton>
                      </IonButtons>
                    </IonToolbar>
                  </IonCardHeader>
                </IonCard>
                <IonCard>
                  <IonCardHeader>
                    <IonToolbar>
                      <IonTitle slot="start">Device 1</IonTitle>
                      <IonButtons slot="end">
                        <IonButton fill="solid" shape="round" color="primary">
                          <IonIcon icon={pencilOutline}></IonIcon>
                        </IonButton>
                        <IonButton fill="solid" shape="round" color="primary">
                          <IonIcon icon={eyeOutline}></IonIcon>
                        </IonButton>
                        <IonButton fill="solid" shape="round" color="primary">
                          <IonIcon icon={trashOutline}></IonIcon>
                        </IonButton>
                      </IonButtons>
                    </IonToolbar>
                  </IonCardHeader>
                </IonCard>
                <IonCard>
                  <IonCardHeader>
                    <IonToolbar>
                      <IonTitle slot="start">Device 1</IonTitle>
                      <IonButtons slot="end">
                        <IonButton fill="solid" shape="round" color="primary">
                          <IonIcon icon={pencilOutline}></IonIcon>
                        </IonButton>
                        <IonButton fill="solid" shape="round" color="primary">
                          <IonIcon icon={eyeOutline}></IonIcon>
                        </IonButton>
                        <IonButton fill="solid" shape="round" color="primary">
                          <IonIcon icon={trashOutline}></IonIcon>
                        </IonButton>
                      </IonButtons>
                    </IonToolbar>
                  </IonCardHeader>
                </IonCard>
              </IonList>
            </IonCardContent>
          </IonCard>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
