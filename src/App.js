import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import BlogForm from './components/BlogForm';
import NavBar  from './components/NavBar';
import Homepage from './pages/Homepage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <Router>
     <NavBar />
      <Switch>
        <Route path="/" exact>
          <Homepage></Homepage>
        </Route>
        <Route path="/blogs" exact>
          <ListPage></ListPage>
        </Route>
        <Route path="/blogs/create" exact>
          <CreatePage></CreatePage>
        </Route>
        <Route path="/blogs/edit" exact>
          <EditPage></EditPage>
        </Route>
      </Switch>
    </Router>
    
  );
}
export default App;