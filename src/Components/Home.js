import './Home.css';
import LinkBar from './Links/LinkBar';
import Button from '@material-ui/core/Button';

function Home() {
  return (
    <div className='Home'>
      <h1 className='HomeTitle'>IZER ONADIM</h1>
      <p className='aboutMe'>I'm a software engineer and computer science student at Imperial College London.</p>
      <LinkBar />
      <a className='ProjectsButton' href='/projects'> 
        VIEW PROJECTS
      </a>
    </div>
  );
}

export default Home;
