import Button from './Button';
import './TitleBar.css';

function TitleBar(props) {
  return (
    <div className='TitleBar'>
      <h1> {props.title} </h1>
      <div className='HomeButton'>
        <Button label='Home' link ='/' />
      </div>
  </div>
  );
}

export default TitleBar;