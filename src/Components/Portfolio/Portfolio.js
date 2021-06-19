import ProjectRow from './ProjectRow';
import projects from './Projects';
import './Portfolio.css';

function Portfolio() {

  return (
    <div className='Portfolio'>
      <h1 className='PortfolioTitle'> PORTFOLIO </h1>
      <p> A selection of projects I've worked on recently. </p>
      <ProjectRow projects={projects}/>
    </div>
  );
}

export default Portfolio;