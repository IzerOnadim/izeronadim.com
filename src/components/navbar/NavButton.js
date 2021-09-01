import './NavButton.css';

function NavButton(props) {
  return (
    <a href={props.linkUrl} className='NavButton'>
      {props.linkName}
    </a>
  );
}

export default NavButton;