import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio/Portfolio';

function AppRouter() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/portfolio' component={Portfolio} />
    </Router>
  );
}

export default AppRouter;