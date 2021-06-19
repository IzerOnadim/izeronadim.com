import './Button.css';

function Button(props) {
  return (
    <a className='GeneralButton' href={props.link}> 
      {props.label}
    </a>
  );
}

export default Button;