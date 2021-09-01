import './Button.css';

function Button(props) {
  let linkProps = {
    className: 'GeneralButton', 
    href: props.link, 
  };

  if (props.newTab) {
    linkProps.target = "_blank";
    linkProps.rel = "noreferrer";
  }

  return (
    <a {...linkProps}> {props.label} </a>
  );
}

export default Button;