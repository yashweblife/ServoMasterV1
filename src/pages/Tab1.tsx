import { useContext } from "react";
import EditorComponent from "../components/EditorComponent";
import ProjectListComponent from "../components/ProjectListComponent";
import { ProjectListContext } from "../store/project-list-context";
import "./Tab1.scss";
/**
 * ### Tab1 | Project List/Editor
 * This tab contains the project list and the editor.
 * It initially allows you to add projects.
 * You can open the projects in the editor.
 * The editor is where you can perform mutations to the projects.
 * @returns 
 */
const Tab1: React.FC = () => {
  const projectListContext = useContext(ProjectListContext);

  return projectListContext && projectListContext.current == null ? (
    <ProjectListComponent />
  ) : (
    <EditorComponent />
  );
};

export default Tab1;
