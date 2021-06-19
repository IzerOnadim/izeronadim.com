import Button from '../General/Button';
import ProjectRow from './ProjectRow';
import projects from './Projects';
import './Portfolio.css';

function Portfolio() {

  return (
    <div className='Portfolio'>
      <div className='TopBar'>
        <h1> PORTFOLIO </h1>
        <div className='HomeButton'>
          <Button className='HomeButtonInner' label='Home' link ='/' />
        </div>
      </div>
      <p> A selection of projects I've worked on recently. </p>
      <ProjectRow projects={projects}/>
    </div>
  );
}

export default Portfolio;