import './Button.css';

function Button(props) {
  return (
    <a 
      className='GeneralButton' 
      href={props.link} 
      target={props.newLink ? "_blank" : ""}
    > 
      {props.label}
    </a>
  );
}

export default Button;