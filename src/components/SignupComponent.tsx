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
 * *Handles signup
 * @param param0 
 * @returns
 */
const SignupComponent: React.FC<{ switcher: () => void }> = ({ switcher }) => {
  const userContext = useContext(UserContext);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const passRef = useRef<HTMLIonInputElement>(null);
  const confRef = useRef<HTMLIonInputElement>(null);
  const handleSignup = () => {
    if (userContext) {
      if (emailRef.current && passRef.current && confRef.current) {
        userContext.create(
          "" + emailRef.current.value,
          "" + passRef.current.value,
          "" + confRef.current.value
        );
      }
    }
  };
  return (
    <IonCard className="authBox">
      <IonCardHeader>
        <IonToolbar>
          <IonTitle>Create An Account</IonTitle>
        </IonToolbar>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Enter Email</IonLabel>
            <IonInput ref={emailRef}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Enter Password</IonLabel>
            <IonInput ref={passRef}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Confirm Password</IonLabel>
            <IonInput ref={confRef}></IonInput>
          </IonItem>
          <IonItem>
            <IonButtons>
              <IonButton shape="round" fill="solid" color="primary" onClick={handleSignup}>
                Enter
              </IonButton>
              <IonButton shape="round" fill="solid" color="primary" onClick={switcher}>
                Login Instead
              </IonButton>
            </IonButtons>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default SignupComponent;
