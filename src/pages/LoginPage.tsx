import { IonContent, IonPage } from "@ionic/react";
import { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import SignupComponent from "../components/SignupComponent";
import "./LoginPage.scss";
const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState<Boolean>(true);
  return (
    <IonPage>
      <IonContent className="authPage" fullscreen>
        {isLogin ? (
          <LoginComponent
            switcher={() => {
              setIsLogin(false);
            }}
          />
        ) : (
          <SignupComponent
            switcher={() => {
              setIsLogin(true);
            }}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
