
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import ShopePage from './Pages/shopPage/ShopePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path="/shop" component={ShopePage} />
      </Switch>
    </div>
  );
}

export default App;
