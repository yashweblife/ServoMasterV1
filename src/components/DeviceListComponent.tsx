import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import { useContext } from "react";
import { DeviceListContext } from "../store/device-list-context";
import { DeviceInterface } from "../utils/utils";
import DeviceComponent from "./DeviceComponent";
import "./DeviceListComponent.scss";


/**
 * A list of devices
 * @returns Device List
 */
const DeviceListComponent: React.FC = () => {
  const deviceListContext = useContext(DeviceListContext);
  const [alert] = useIonAlert();
  /**
   * 
   * @param name String, name of device
   * @param auth String, Auth code
   */
  const handleAdd = (name: string, auth: string) => {
    deviceListContext?.add(name, auth);
  };
  return (
    <IonCard className="deviceListCard">
      <IonCardHeader>
        <IonToolbar>
          <IonTitle slot="start">Devices</IonTitle>
          <IonButton
            slot="end"
            fill="solid"
            shape="round"
            onClick={() => {
              alert({
                header: "Add A Device",
                inputs: [
                  {
                    placeholder: "Enter a Name",
                  },
                  {
                    placeholder: "Enter The Auth Code",
                  },
                ],
                buttons: [
                  {
                    text: "Add",
                    handler: (data: any) => {
                      handleAdd(data[0], data[1]);
                    },
                  },
                  {
                    text: "Discard",
                  },
                ],
              });
            }}
          >
            <IonIcon color="dark" icon={addOutline}></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonCardHeader>
      <IonCardContent>
        {deviceListContext?.size ? (
          <IonList className="projectList">
            {deviceListContext.list?.map(
              (item: DeviceInterface, index: number) => (
                <DeviceComponent
                  data={item}
                  key={item.id}
                  index={index}
                ></DeviceComponent>
              )
            )}
          </IonList>
        ) : (
          <div className="centerMessage">
            <IonLabel color="primary">Add a Device</IonLabel>
          </div>
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default DeviceListComponent;
