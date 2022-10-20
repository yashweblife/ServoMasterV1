import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useContext, useRef } from "react";
import { UserContext } from "../store/user-context";
/**
 * Login box for auth
 * @param param0 Switcher,
 * @returns 
 */
const LoginComponent: React.FC<{ switcher: () => void }> = ({ switcher }) => {
  const emailRef = useRef<HTMLIonInputElement>(null);
  const passRef = useRef<HTMLIonInputElement>(null);
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    if (emailRef.current && passRef.current) {
      console.log(1);
      userContext?.login(
        "" + emailRef.current.value,
        "" + passRef.current.value
      );
    }
  };
  return (
    <IonCard className="authBox">
      <IonCardHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Enter Username</IonLabel>
            <IonInput type="email" ref={emailRef}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Enter Password</IonLabel>
            <IonInput type="password" ref={passRef}></IonInput>
          </IonItem>
          <IonItem>
            <IonButtons>
              <IonButton fill="solid" color="primary" onClick={handleLogin}>
                Enter
              </IonButton>
              <IonButton fill="solid" color="primary" onClick={switcher}>
                Create An Account
              </IonButton>
            </IonButtons>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default LoginComponent;
