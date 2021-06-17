import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';

function AppRouter() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default AppRouter;