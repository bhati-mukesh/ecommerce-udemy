
import './App.css';
import React from 'react'
import HomePage from './Pages/HomePage/HomePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopePage from './Pages/shopPage/ShopePage';
import Header from './components/header/Header';
import SigninSignupPage from './Pages/signinSignupPage/SigninSignupPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userAction'
import { selectCurrentUser } from './redux/user/userSelector';
import { createStructuredSelector } from 'reselect';
import CheckOut from './Pages/checkout/CheckOut';



class  App extends React.Component  {
  
  unSubscribeFromAuth = null;

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {    
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }else{
        setCurrentUser(userAuth)
      }
      // createUserProfileDocument(user)
      // this.setState({ currentUser: user });
      // console.log(user)
    })
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route exact path="/signin" render = { ()=> this.props.currentUser ? (<Redirect to="/" />) : (<SigninSignupPage />) }  />
          <Route exact path="/signup" component={SigninSignupPage} />
          <Route path="/shop" component={ShopePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch)=>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
