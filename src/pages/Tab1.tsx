import { useContext } from "react";
import EditorComponent from "../components/EditorComponent";
import ProjectListComponent from "../components/ProjectListComponent";
import { ProjectListContext } from "../store/project-list-context";
import "./Tab1.scss";

const Tab1: React.FC = () => {
  const projectListContext = useContext(ProjectListContext);

  return projectListContext && projectListContext.current == null ? (
    <ProjectListComponent />
  ) : (
    <EditorComponent />
  );
};

export default Tab1;
