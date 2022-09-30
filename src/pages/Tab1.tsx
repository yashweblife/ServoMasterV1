import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonChip, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRange, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import { addOutline, arrowBackOutline, closeOutline, createOutline, listOutline, menuOutline, playOutline, saveOutline, trashOutline } from 'ionicons/icons';
import './Tab1.scss';

const Tab1: React.FC = () => {
  return (
    (false) ? 
    <IonPage>
        <IonHeader>
          <IonToolbar class="ion-padding-start">
            <IonIcon icon={listOutline} slot="start"></IonIcon>
            <IonTitle slot="end">Projects</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonFab vertical='bottom' horizontal='end' slot='fixed'>
            <IonFabButton>
              <IonIcon icon={addOutline}></IonIcon>
            </IonFabButton>
          </IonFab>
          <IonList>
            <IonCard>
              <IonCardHeader>
                <IonToolbar>
                  <IonTitle size='small' slot="start">Project 1</IonTitle>
                  <IonButtons slot="end">
                    <IonButton fill="clear">
                      <IonIcon icon={trashOutline}></IonIcon>
                    </IonButton>
                    <IonButton fill="clear">
                      <IonIcon icon={playOutline}></IonIcon>
                    </IonButton>
                    <IonButton fill="clear">
                      <IonIcon icon={createOutline}></IonIcon>
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCardHeader>
            </IonCard>
          </IonList>
        </IonContent>
    </IonPage>
    :
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" fill="clear">
            <IonIcon icon={arrowBackOutline}></IonIcon>
          </IonButton>
          <IonTitle slot="end">Editor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonFab vertical='bottom' horizontal='end' slot='fixed'>
          <IonFabButton>
            <IonIcon icon={menuOutline}></IonIcon>
          </IonFabButton>
          <IonFabList side="start">
            <IonFabButton>
              <IonIcon icon={addOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={addOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={addOutline}></IonIcon>
            </IonFabButton>
          </IonFabList>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={saveOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={trashOutline}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
        <IonAccordionGroup class="ion-padding">
          <IonAccordion class="ion-margin-bottom">
            <IonItem slot="header">
              <IonIcon icon={closeOutline}></IonIcon>
              <IonLabel>Step 1</IonLabel>
            </IonItem>
            <IonItem slot="content" class="ion-">
              <IonList>
                <div>
                  <IonLabel>Start</IonLabel>
                  <IonRange min={0} max={180} value={20}></IonRange>
                </div>
                <div>
                  <IonLabel>Start</IonLabel>
                  <IonRange min={0} max={180} value={20}></IonRange>
                </div>
                <div>
                  <IonLabel>Start</IonLabel>
                  <IonRange min={0} max={180} value={20}></IonRange>
                </div>
                <div>
                  <IonLabel>Start</IonLabel>
                  <IonRange min={0} max={180} value={20}></IonRange>
                </div>
                <div>
                  <IonSegment>
                    <IonSegmentButton><IonLabel>S1</IonLabel></IonSegmentButton>
                    <IonSegmentButton><IonLabel>S2</IonLabel></IonSegmentButton>
                    <IonSegmentButton><IonLabel>S3</IonLabel></IonSegmentButton>
                    <IonSegmentButton><IonLabel>S4</IonLabel></IonSegmentButton>
                  </IonSegment>
                </div>
              </IonList>
            </IonItem>
          </IonAccordion>
          <IonAccordion class="ion-margin-bottom">
            <IonItem slot="header">
              <IonIcon icon={closeOutline}></IonIcon>
              <IonLabel>Step 1</IonLabel>
            </IonItem>
            <IonItem slot="content" class="ion-">
              <IonList>
                <div>
                  <IonLabel>Start</IonLabel>
                  <IonRange min={0} max={180} value={20}></IonRange>
                </div>
                <div>
                  <IonLabel>Start</IonLabel>
                  <IonRange min={0} max={180} value={20}></IonRange>
                </div>
                <div>
                  <IonLabel>Start</IonLabel>
                  <IonRange min={0} max={180} value={20}></IonRange>
                </div>
                <div>
                  <IonLabel>Start</IonLabel>
                  <IonRange min={0} max={180} value={20}></IonRange>
                </div>
                <div>
                  <IonSegment>
                    <IonSegmentButton><IonLabel>S1</IonLabel></IonSegmentButton>
                    <IonSegmentButton><IonLabel>S2</IonLabel></IonSegmentButton>
                    <IonSegmentButton><IonLabel>S3</IonLabel></IonSegmentButton>
                    <IonSegmentButton><IonLabel>S4</IonLabel></IonSegmentButton>
                  </IonSegment>
                </div>
              </IonList>
            </IonItem>
          </IonAccordion>
          <IonAccordion class="ion-margin-bottom">
            <IonItem slot="header">
              <IonIcon icon={closeOutline}></IonIcon>
              <IonLabel>Step 1</IonLabel>
            </IonItem>
            <IonItem slot="content" class="ion-">
              <IonList>
                <div>
                  <IonLabel>Start</IonLabel>
                  <IonRange min={0} max={180} value={20}></IonRange>
                </div>
                <div>
                  <IonLabel>Start</IonLabel>
                  <IonRange min={0} max={180} value={20}></IonRange>
                </div>
                <div>
                  <IonLabel>Start</IonLabel>
                  <IonRange min={0} max={180} value={20}></IonRange>
                </div>
                <div>
                  <IonLabel>Start</IonLabel>
                  <IonRange min={0} max={180} value={20}></IonRange>
                </div>
                <div>
                  <IonSegment>
                    <IonSegmentButton><IonLabel>S1</IonLabel></IonSegmentButton>
                    <IonSegmentButton><IonLabel>S2</IonLabel></IonSegmentButton>
                    <IonSegmentButton><IonLabel>S3</IonLabel></IonSegmentButton>
                    <IonSegmentButton><IonLabel>S4</IonLabel></IonSegmentButton>
                  </IonSegment>
                </div>
              </IonList>
            </IonItem>
          </IonAccordion>

          <IonAccordion class="ion-margin-bottom">
            <IonItem slot="header">
              <IonIcon icon={closeOutline}></IonIcon>
              <IonLabel>Trigger</IonLabel>
            </IonItem>
            <IonItem slot="content">
              <IonList>
                <div>
                  <IonSegment>
                    <IonSegmentButton><IonLabel>I1</IonLabel></IonSegmentButton>
                    <IonSegmentButton><IonLabel>I2</IonLabel></IonSegmentButton>
                    <IonSegmentButton><IonLabel>I3</IonLabel></IonSegmentButton>
                    <IonSegmentButton><IonLabel>I4</IonLabel></IonSegmentButton>
                  </IonSegment>
                </div>
              </IonList>
            </IonItem>
          </IonAccordion>
          <IonAccordion class="ion-margin-bottom">
            <IonItem slot="header">
              <IonIcon icon={closeOutline}></IonIcon>
              <IonLabel>Delay</IonLabel>
            </IonItem>
            <IonItem slot="content">
              <IonList>
                <div>
                  <IonLabel>Delay</IonLabel>
                  <IonRange min={0} max={180} value={20}></IonRange>
                </div>
              </IonList>
            </IonItem>
          </IonAccordion>


        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
