import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD5bEzobmbOhp0ABY3hMpftthLC7UdDyb0",
  authDomain: "servomasterdev.firebaseapp.com",
  databaseURL: "https://servomasterdev-default-rtdb.firebaseio.com",
  projectId: "servomasterdev",
  storageBucket: "servomasterdev.appspot.com",
  messagingSenderId: "225136072285",
  appId: "1:225136072285:web:c1c1ee99386f4016199fb4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

/**
 * * Returns a random string of specified size with default size of 10
 * @param  {number=10} size
 * @returns string
 */
export const makeRandString = (size: number = 10): string => {
  const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var op = "";
  for (var i = 0; i < size; i++) {
    op += a[Math.floor(Math.random() * a.length)];
  }
  return op;
};
/**
 * * angle_start : number
 * * angle_end : number
 * * delay : number
 * * name : string
 * * servo : number
 * * size : number
 * * type : string
 */
export interface StepInterface {
  angle_end: number;
  angle_start: number;
  delay: number;
  name: string;
  servo: number;
  size: number;
  type: string;
}

/**
 * * name : string
 * * steps : StepInterface[]
 * * id : string
 */
export interface ProjectInterface {
  name: string;
  steps: StepInterface[];
  id: string;
}
/**
 * * Returns a zero value step
 * @returns StepInterface
 */
export function createStep(): StepInterface {
  return {
    angle_end: 0,
    angle_start: 0,
    delay: 1,
    name: "Step 1",
    servo: 1,
    size: 1,
    type: "step",
  };
}

/**
 * * list: ProjectInterface[] | null;
 * * size:number | null
 * * add: (name: string, id: string) => void;
 * * remove: (id: string) => void;
 * * open: (id: string) => void;
 * * close: () => void;
 * * addStep: () => void;
 * * removeStep: (index: number) => void;
 * * summarize: () => void;
 * * current: ProjectInterface | null;
 * * editStep: (index: number, type: number, value: any) => void;
 */
export interface ProjectListInterface {
  list: ProjectInterface[] | null;
  size: number | null;
  add: (name: string, id: string) => void;
  remove: (id: string) => void;
  open: (id: string) => void;
  close: () => void;
  addStep: () => void;
  removeStep: (index: number) => void;
  summarize: () => void;
  save:()=>void
  current: ProjectInterface | null;
  editStep: (index: number, type: number, value: any) => void;
}

/**
 * * name: string;
 * * auth: string;
 * * id: string;
 */
export interface DeviceInterface {
  name: string;
  auth: string;
  id: string;
}

/**
 * * list: DeviceInterface[];
 * * size: number;
 * * add: (name: string, auth: string) => void;
 * * remove: (id: string) => void;
 * * edit: (id: string, name: string, auth: string) => void;
 */
export interface DeviceContextInterface {
  list: DeviceInterface[];
  size: number;
  add: (name: string, auth: string) => void;
  remove: (id: string) => void;
  edit: (id: string, name: string, auth: string) => void;
}
