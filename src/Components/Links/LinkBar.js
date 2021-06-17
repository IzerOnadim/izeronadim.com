import './LinkBar.css';
import LinkButton from './LinkButton';

function LinkBar() {
  return (
    <div className='LinkBar'>
      <LinkButton label={'GITHUB'} link={'https://github.com/IzerOnadim'} />
      <LinkButton label={'LINKEDIN'} link={'https://www.linkedin.com/in/izeronadim/'} />
    </div>
  );
}

export default LinkBar;