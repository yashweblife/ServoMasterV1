import { IonButton, IonButtons, IonCard, IonCardHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react"
import { pencilOutline, eyeOutline, trashOutline, eyeOffOutline } from "ionicons/icons"
import { useContext, useState } from "react";
import { DeviceListContext } from "../store/device-list-context";
import { DeviceInterface } from "../utils/utils"
import "./DeviceComponent.scss"
const DeviceComponent:React.FC<{data:DeviceInterface; index:number}> = ({data, index})=>{
  const deviceListContext = useContext(DeviceListContext)
    const [isShowAuth, setIsShowAuth] = useState<Boolean>(false)
    const toggleAuth = ()=>{
        if(isShowAuth){
            setIsShowAuth(false)
        }else{
            setIsShowAuth(true)
        }
    }
    const handleDelete = ()=>{
      console.log(data.id)
      deviceListContext?.remove(data.id)
    }
    return(
        <IonCard className="DeviceCard">
        <IonCardHeader>
          <IonToolbar>
            <IonTitle slot="start">{(isShowAuth)?data.auth:data.name}</IonTitle>
            <IonButtons slot="end">
              <IonButton fill="solid" shape="round" color="primary">
                <IonIcon icon={pencilOutline}></IonIcon>
              </IonButton>
              <IonButton fill="solid" shape="round" color="primary" onClick={toggleAuth}>
                <IonIcon icon={(isShowAuth)?eyeOffOutline:eyeOutline}></IonIcon>
              </IonButton>
              <IonButton fill="solid" shape="round" color="primary" onClick={handleDelete}>
                <IonIcon icon={trashOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonCardHeader>
      </IonCard>
    )
}

export default DeviceComponent