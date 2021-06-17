import './Home.css';
import LinkBar from './Links/LinkBar';

function Home() {
  return (
    <div className="Home">
      <header className="HomeHeader">
        <h1>IZER ONADIM</h1>
        <p className='aboutMe'>I'm a software engineer and computer science student at Imperial College London.</p>
        <LinkBar />
      </header>
    </div>
  );
}

export default Home;
