import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { personOutline } from "ionicons/icons";
import { useContext } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DeviceListComponent from "../components/DeviceListComponent";
import { DeviceListContext } from "../store/device-list-context";
import { ProjectListContext } from "../store/project-list-context";
import "./Tab2.scss";


/**
 * ### Tab2 | Profile
 * This is where the user can see their stats and add devices.
 * There are 2 stats, the number of projects and the number of devices.
 * @returns 
 */
const Tab2: React.FC = () => {
  const projectListContext = useContext(ProjectListContext);
  const deviceListContext = useContext(DeviceListContext);
  console.log(projectListContext?.size);
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
          <IonItem lines="none" className="progressItem">
            <IonCard className="progressCard">
              <IonCardContent>
                <CircularProgressbar
                  value={
                    projectListContext && projectListContext.size
                      ? projectListContext.size
                      : 0
                  }
                  minValue={0}
                  maxValue={50}
                  text={`${
                    projectListContext && projectListContext.size
                      ? projectListContext.size
                      : 0
                  } ${false ? "Projects" : "Project"}`}
                  styles={buildStyles({
                    pathColor: "#50FFC0",
                    trailColor: "#1f2e39",
                    textColor: "#50FFC0",
                    textSize: "12px",
                    strokeLinecap: "round",
                  })}
                />
              </IonCardContent>
            </IonCard>
            <IonCard className="progressCard">
              <IonCardContent>
                <CircularProgressbar
                  value={
                    deviceListContext && deviceListContext.size
                      ? deviceListContext.size
                      : 0
                  }
                  minValue={0}
                  maxValue={50}
                  text={`${
                    deviceListContext && deviceListContext.size
                      ? deviceListContext.size
                      : 0
                  } ${false ? "Devices" : "Device"}`}
                  styles={buildStyles({
                    pathColor: "#50FFC0",
                    trailColor: "#1f2e39",
                    textColor: "#50FFC0",
                    textSize: "12px",
                    strokeLinecap: "round",
                  })}
                />
              </IonCardContent>
            </IonCard>
          </IonItem>
        </IonList>
        <DeviceListComponent />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
