import './NavBar.css';
import NavButton from './NavButton';

function NavBar() {
  return (
    <div className='NavBar'>
      <NavButton linkUrl='/' linkName='HOME' />
      <NavButton linkUrl='/about' linkName='ABOUT' />
      <NavButton linkUrl='/portfolio' linkName='PORTFOLIO' />
    </div>
  );
}

export default NavBar;