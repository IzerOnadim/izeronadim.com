import './ProjectTile.css';

function ProjectTile(props) {

  let viewProject = () => {
    console.log('viewing ' + props.title);
  }

  let style = {
    'backgroundImage': props.image
  }

  return (
    <div className='ProjectTile' style={style} onClick={viewProject}>
      <h2> {props.title} </h2>
      <div className='ViewProject'>
        <h3 className='ViewProjectText'> VIEW PROJECT </h3>
      </div>
    </div>
  );
}

export default ProjectTile;