import { createContext, useState } from "react";

export interface StepInterface {
  angle_end: number;
  angle_start: number;
  delay: number;
  name: string;
  servo: number;
  size: number;
  type: string;
}

export interface ProjectInterface {
  name: string;
  steps: StepInterface[];
  id: string;
}

function createStep(): StepInterface {
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
  current: ProjectInterface | null;
  editStep: (index: number, type: number, value: any) => void;
}
export const ProjectListContext = createContext<ProjectListInterface | null>(
  null
);

export const ProjectListContextProvider = (props: any) => {
  const [list, setList] = useState<ProjectInterface[] | null>(null);
  const [currentProject, setCurrentProject] = useState<ProjectInterface | null>(
    null
  );
  const add = (name: string, id: string) => {
    if (list) {
      console.log(name);
      const arr = [...list];
      arr.push({
        name: name,
        steps: [],
        id: id,
      });
      setList(arr);
    } else {
      const arr = [];
      arr.push({
        name: name,
        steps: [],
        id: id,
      });
      setList(arr);
    }
  };
  const remove = (id: string) => {
    if (list) {
      const arr = list?.filter((item: ProjectInterface) => item.id != id);
      setList(arr);
    }
  };

  const openProject = (id: string) => {
    if (list) {
      const arr = [...list];
      const val = arr.filter((item: ProjectInterface) => item.id == id)[0];
      setCurrentProject(val);
    }
  };
  const closeProject = () => {
    setCurrentProject(null);
  };
  const addStep = () => {
    if (currentProject) {
      const c = { ...currentProject };
      c.steps.push(createStep());
      setCurrentProject(c);
    }
  };
  const removeStep = (index: number) => {
    if (currentProject) {
      const c = { ...currentProject };
      c.steps.splice(index, 1);
      setCurrentProject(c);
    }
  };
  const editStep = (index: number, type: number, value: any) => {
    if (currentProject) {
      const c = { ...currentProject };
      if (type === 0) c.steps[index].angle_start = value;
      if (type === 1) c.steps[index].angle_end = value;
      if (type === 2) c.steps[index].delay = value;
      if (type === 3) c.steps[index].size = value;
      if (type === 4) c.steps[index].servo = value;
      console.log(index, c.steps[index]);
    }
  };
  const summarizeProject = () => {
    if (currentProject) {
      const c = { ...currentProject };
      var op = "";
      c.steps.forEach((item) => {
        op += `${item.angle_end}|${item.angle_start}|${item.delay}|${item.servo}|${item.size}`;
      });
      console.log(op);
    }
  };
  const context: ProjectListInterface = {
    list: list,
    size: list && list.length,
    add: add,
    remove: remove,
    open: openProject,
    close: closeProject,
    addStep: addStep,
    removeStep: removeStep,
    summarize: summarizeProject,
    current: currentProject,
    editStep: editStep,
  };
  return (
    <ProjectListContext.Provider value={context}>
      {props.children}
    </ProjectListContext.Provider>
  );
};
