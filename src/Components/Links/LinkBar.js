import './LinkBar.css';
import LinkButton from './LinkButton';
import githubLogo from '../../images/github-logo.png';
import linkedinLogo from '../../images/linkedin-logo.png';
import emailLogo from '../../images/email-logo.png';
import cvLogo from '../../images/cv-logo.png';
import stackOverflowLogo from '../../images/stackoverflow-logo.png';
import * as style from './LinkButtonStyles.js';


function LinkBar() {

  return (
    <>
    <div className='LinkBar'>
      <LinkButton
        label={'GITHUB'}
        link={'https://github.com/IzerOnadim'}
        image={githubLogo}
        buttonStyle={style.githubButtonStyle}
      />
      <LinkButton
        label={'LINKEDIN'}
        link={'https://www.linkedin.com/in/izeronadim/'}
        image={linkedinLogo}
        buttonStyle={style.linkedInButtonStyle}
      />
      <LinkButton
        label={'STACK OVERFLOW'}
        link={'https://stackoverflow.com/users/11248363/izer-onadim'}
        image={stackOverflowLogo}
        buttonStyle={style.stackOverFlowButtonStyle}
        imageStyle={style.stackOverflowImageStyle}
      />
      <LinkButton
        label={'CV'}
        link={'/cv.pdf'}
        image={cvLogo}
        buttonStyle={style.cvButtonStyle}
        imageStyle={style.invertImageStyle}
      />
      <LinkButton
        label={'EMAIL'}
        link={'mailto: izer.onadim19@imperial.ac.uk'}
        image={emailLogo}
        buttonStyle={style.emailButtonStyle}
        imageStyle={style.invertImageStyle}
      />
    </div>
    <LinkButton 
      label={'VIEW PROJECTS'}
      link={'/projects'}
      imageStyle={style.projectButtonStyle}
    />
    </>
  );
}

export default LinkBar;