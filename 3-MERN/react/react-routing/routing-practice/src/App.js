import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Routes from './components/Routes';

function App() {
  return (
    <div className="container mx-auto p-5 text-center">
      <BrowserRouter>
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/:value'>
            <Routes />
          </Route>
          <Route exact path='/:value/:color1/:color2'>
            <Routes />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
