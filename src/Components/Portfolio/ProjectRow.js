import ProjectTile from "./ProjectTile";
import './ProjectRow.css'

function ProjectRow(props) {
  return(
    <div className='ProjectRow'>
      {props.projects.map(project =>
        <ProjectTile title={project.title} image={project.image} />
      )}
    </div>
  );
}

export default ProjectRow;