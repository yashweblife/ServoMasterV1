import {
  IonAccordion,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRange,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import { useContext, useRef } from "react";
import { ProjectListContext } from "../store/project-list-context";
import { StepInterface } from "../utils/utils";
import "./StepComponent.scss";
/**
 * Step Component
 * @param param0 
 * @returns 
 */
const StepComponent: React.FC<{ index: number; data: StepInterface }> = ({
  index,
  data,
}) => {
  const projectListContext = useContext(ProjectListContext);
  const startRange = useRef<HTMLIonRangeElement | null>(null);
  const endRange = useRef<HTMLIonRangeElement | null>(null);
  const delayRange = useRef<HTMLIonRangeElement | null>(null);
  const speedRange = useRef<HTMLIonRangeElement | null>(null);
  const servoSelect = useRef<HTMLIonSegmentElement | null>(null);

  const removeStep = (index: number) => {
    if (projectListContext) {
      projectListContext.removeStep(index);
    }
  };
  return true ? (
    <IonAccordion class="ion-margin-bottom" className="stepContainer">
      <IonItem slot="header" lines="none">
        <IonButton
          fill="clear"
          onClick={() => {
            removeStep(index);
          }}
        >
          <IonIcon icon={closeOutline} color="primary"></IonIcon>
        </IonButton>
        <IonLabel>Step {index + 1}</IonLabel>
      </IonItem>
      <IonItem slot="content" lines="none">
        <IonList>
          <div className="range">
            <IonLabel>Start</IonLabel>
            <IonRange
              min={0}
              max={180}
              value={data.angle_start}
              pin={true}
              ref={startRange}
              onIonChange={({ detail }) => {
                projectListContext?.editStep(index, 0, detail.value);
              }}
            ></IonRange>
          </div>
          <div className="range">
            <IonLabel>End</IonLabel>
            <IonRange
              min={0}
              max={180}
              value={data.angle_end}
              pin={true}
              ref={endRange}
              onIonChange={({ detail }) => {
                projectListContext?.editStep(index, 1, detail.value);
              }}
            ></IonRange>
          </div>
          <div className="range">
            <IonLabel>Delay</IonLabel>
            <IonRange
              min={0}
              max={180}
              value={data.delay}
              pin={true}
              ref={delayRange}
              onIonChange={({ detail }) => {
                projectListContext?.editStep(index, 2, detail.value);
              }}
            ></IonRange>
          </div>
          <div className="range">
            <IonLabel>Speed</IonLabel>
            <IonRange
              min={0}
              max={180}
              value={data.size}
              pin={true}
              ref={speedRange}
              onIonChange={({ detail }) => {
                projectListContext?.editStep(index, 3, detail.value);
              }}
            ></IonRange>
          </div>
          <div>
            <IonSegment
              ref={servoSelect}
              value={`${data.servo}`}
              onIonChange={({ detail }) => {
                projectListContext?.editStep(index, 4, Number(detail.value));
              }}
            >
              <IonSegmentButton value="1">
                <IonLabel>S1</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="2">
                <IonLabel>S2</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="3">
                <IonLabel>S3</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="4">
                <IonLabel>S4</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </div>
        </IonList>
      </IonItem>
    </IonAccordion>
  ) : (
    <IonAccordion class="ion-margin-bottom" className="stepContainer">
      <IonItem slot="header" lines="none">
        <IonIcon icon={closeOutline} color="primary"></IonIcon>
        <IonLabel>Trigger</IonLabel>
      </IonItem>
      <IonItem slot="content" lines="none">
        <IonList>
          <div>
            <IonSegment>
              <IonSegmentButton>
                <IonLabel>I1</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton>
                <IonLabel>I2</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton>
                <IonLabel>I3</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton>
                <IonLabel>I4</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </div>
        </IonList>
      </IonItem>
    </IonAccordion>
  );
  //   <IonAccordion class="ion-margin-bottom">
  //     <IonItem slot="header">
  //       <IonIcon icon={closeOutline}></IonIcon>
  //       <IonLabel>Delay</IonLabel>
  //     </IonItem>
  //     <IonItem slot="content">
  //       <IonList>
  //         <div>
  //           <IonLabel>Delay</IonLabel>
  //           <IonRange min={0} max={180} value={20}></IonRange>
  //         </div>
  //       </IonList>
  //     </IonItem>
  //   </IonAccordion>
};

export default StepComponent;
