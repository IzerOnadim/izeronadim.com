import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import UnderDev from './components/general/UnderDev';

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <UnderDev />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/portfolio' component={Portfolio} />
    </Router>
  );
}

export default AppRouter;