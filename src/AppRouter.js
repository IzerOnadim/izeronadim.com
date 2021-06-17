import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar/NavBar';

function AppRouter() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default AppRouter;