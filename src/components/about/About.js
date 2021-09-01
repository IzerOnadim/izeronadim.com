import Button from '../general/Button';
import TitleBar from '../general/TitleBar';
import './About.css';

function About() {
  return (
    <div className='About'>
      <TitleBar title='ABOUT ME'/>

      <p className='AboutText'>
        My name is Izer Onadim. I am a full-stack software engineer who has 
        worked for Morgan Stanley and American Express. 
        <br/><br/>
        I am currently in the third year of an integrated masters of engineering in computer science 
        at Imperial College London, specialising in AI and ML. I received a first class in both my first and second years.
        <br/><br/>
        I am proficient in Java, Python and C. I have professional experience in using Java/Spring Boot for back-end development,
        and both JavaScript/React and TypeScript/Angular for front-end development. 
        I also have prior experience with Haskell, HTML, CSS and various flavours of SQL.
      </p>
      
      <p className='LastUpdatedText'>Last Updated: 1<sup>st</sup> September 2021</p>

      <br/><br/>

      <div>
        <Button label='VIEW CV' link='/cv.pdf' newLink={true}/>
      </div>
    </div>
  );
}

export default About;