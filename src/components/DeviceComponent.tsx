import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import {
  eyeOffOutline,
  eyeOutline,
  pencilOutline,
  trashOutline,
} from "ionicons/icons";
import { useContext, useState } from "react";
import { DeviceListContext } from "../store/device-list-context";
import { DeviceInterface } from "../utils/utils";
import "./DeviceComponent.scss";

/**
 * @param param0 device interface and an index
 * @returns A device component
 */
const DeviceComponent: React.FC<{ data: DeviceInterface; index: number }> = ({
  data,
}) => {
  const deviceListContext = useContext(DeviceListContext);
  const [isShowAuth, setIsShowAuth] = useState<Boolean>(false);
  const [alert] = useIonAlert();
  const toggleAuth = () => {
    if (isShowAuth) {
      setIsShowAuth(false);
    } else {
      setIsShowAuth(true);
    }
  };
  /**
   * Deletes the device
   */
  const handleDelete = () => {
    //console.log(data.id);
    deviceListContext?.remove(data.id);
  };
  /**
   * * Edits the device details
   * @param name
   * @param auth 
   */
  const handleEdit = (name: string, auth: string) => {
    deviceListContext?.edit(data.id, name, auth);
  };
  return (
    <IonCard className="DeviceCard">
      <IonCardHeader>
        <IonToolbar>
          <IonTitle slot="start">{isShowAuth ? data.auth : data.name}</IonTitle>
          <IonButtons slot="end">
            <IonButton
              fill="solid"
              shape="round"
              color="primary"
              onClick={() => {
                alert({
                  header: ` ${data.name}`,
                  buttons: [
                    {
                      text: "Save",
                      handler: (data) => {
                        handleEdit(data[0], data[1]);
                      },
                    },
                    { text: "Discard" },
                  ],
                  inputs: [
                    { placeholder: "Enter Name", value: data.name },
                    { placeholder: "Enter auth Code", value: data.auth },
                  ],
                });
              }}
            >
              <IonIcon icon={pencilOutline}></IonIcon>
            </IonButton>
            <IonButton
              fill="solid"
              shape="round"
              color="primary"
              onClick={toggleAuth}
            >
              <IonIcon icon={isShowAuth ? eyeOffOutline : eyeOutline}></IonIcon>
            </IonButton>
            <IonButton
              fill="solid"
              shape="round"
              color="primary"
              onClick={handleDelete}
            >
              <IonIcon icon={trashOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonCardHeader>
    </IonCard>
  );
};

export default DeviceComponent;
