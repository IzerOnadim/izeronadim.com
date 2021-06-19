import Project from "./Project";
import './ProjectRow.css'

function ProjectRow(props) {
  return(
    <div className='ProjectRow'>
      {props.projects.map(project =>
        <Project title={project.title} image={project.image} />
      )}
    </div>
  );
}

export default ProjectRow;