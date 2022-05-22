import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Hello Gorgeous ;-)</h1>
        <Switch>
          <Route path={'/'} exact component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
