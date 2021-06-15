import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='NavBar'>
      <Link className='NavBarLink' to='/'>Home</Link>
      <Link className='NavBarLink' to='about'>About Me</Link>
    </div>
  );
}

export default NavBar;