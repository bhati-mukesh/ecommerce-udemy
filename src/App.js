
import './App.css';
import React from 'react'
import HomePage from './Pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import ShopePage from './Pages/shopPage/ShopePage';
import Header from './components/header/Header';
import SigninSignupPage from './Pages/signinSignupPage/SigninSignupPage';
import { auth } from './firebase/firebase.utils';


class  App extends React.Component  {
  
  unSubscribeFromAuth = null;

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user });
      console.log(user)
    })
  }
  
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path="/shop" component={ShopePage} />
          <Route exact path="/signin" component={SigninSignupPage} />
          <Route exact path="/signup" component={SigninSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
