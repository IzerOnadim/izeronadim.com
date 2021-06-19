import Button from './General/Button';
import LinkBar from './Links/LinkBar';
import './Home.css';

function Home() {
  return (
    <div className='Home'>
      <h1 className='HomeTitle'>IZER ONADIM</h1>
      <p className='aboutMe'>I'm a software engineer and computer science student at Imperial College London.</p>
      <LinkBar />
      <Button label='VIEW PROJECTS' link='/portfolio'></Button>
    </div>
  );
}

export default Home;
