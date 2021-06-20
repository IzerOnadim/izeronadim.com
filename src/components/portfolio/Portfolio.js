import Button from '../general/Button';
import ProjectRow from './ProjectRow';
import projects from './projects';
import './Portfolio.css';

function Portfolio() {

  function splitIntoRows(projects, numberPerRow) {
    const numberOfRows = Math.ceil(projects.length / numberPerRow);
    return new Array(numberOfRows)
      .fill('')
      .map((_, i) => projects.slice(i * numberPerRow, (i + 1) * numberPerRow));
  }

  return (
    <div className='Portfolio'>
      <div className='TopBar'>
        <h1> PORTFOLIO </h1>
        <div className='HomeButton'>
          <Button className='HomeButtonInner' label='Home' link ='/' />
        </div>
      </div>
      <p> A selection of projects I've worked on recently. </p>
      { splitIntoRows(projects, 2).map(rowOfProjects => 
        <ProjectRow projects={rowOfProjects} />)
      }
    </div>
  );
}

export default Portfolio;