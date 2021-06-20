import './ProjectTile.css';

function ProjectTile(props) {

  const projectImage = {
    'backgroundImage': props.image
  }

  return (
    <div className='ProjectTile' style={projectImage}>
      <h2> {props.title} </h2>
      <div className='ViewProject'>
        <h3 className='ViewProjectText'> VIEW PROJECT </h3>
      </div>
    </div>
  );
}

export default ProjectTile;