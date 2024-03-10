import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import NavBar  from './components/NavBar';
import routes from './routes';

function App() {
  return (
    <Router>
     <NavBar />
      <Switch>
        {routes.map((route) => {
          return <Route exact key={route.path} path = {route.path} component = {route.component}></Route>
        })}
      </Switch>
    </Router>
  );
}

export default App;

