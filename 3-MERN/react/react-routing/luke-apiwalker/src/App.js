import './App.css';
import Search from './components/Search';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Display from './components/Display';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-5">
        <h3 className="text-center mb-4">Luke APIWalker</h3>
        <Search />
        <Switch>
          <Route path='/:resource/:id'>
            <Display />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
