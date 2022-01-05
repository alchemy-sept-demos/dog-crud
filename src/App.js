import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import DogList from './views/Dogs/DogList';
import DogDetail from './views/Dogs/DogDetail';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={DogList} />
          <Route path="/dogs/:id" component={DogDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
