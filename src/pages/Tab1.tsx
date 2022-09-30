import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonChip, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRange, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import { addOutline, arrowBackOutline, closeOutline, createOutline, listOutline, menuOutline, playOutline, saveOutline, trashOutline } from 'ionicons/icons';
import EditorComponent from '../components/EditorComponent';
import ProjectListComponent from '../components/ProjectListComponent';
import './Tab1.scss';

const Tab1: React.FC = () => {
  return (
    (true) ? 
    <ProjectListComponent/>
    :
    <EditorComponent/>
  );
};

export default Tab1;
