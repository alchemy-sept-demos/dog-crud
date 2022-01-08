import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import DogList from './views/Dogs/DogList';
import DogDetail from './views/Dogs/DogDetail';
import Header from './components/Header/Header';
import DogEdit from './views/Dogs/DogEdit';
import DogAdmin from './views/Dogs/DogAdmin';
import Error from './views/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={DogList} />
          <Route path="/admin" exact component={DogAdmin} />
          <Route path="/dogs/:id/edit" component={DogEdit} />

          <Route path="/dogs/:id" component={DogDetail} />

          {/* <Route path="/dogs/:id"> */}
          {/* <DogDetail />
          </Route> */}

          <Route>
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
