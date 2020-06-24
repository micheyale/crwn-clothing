import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

// const HatsPage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Hats Page</h1>
//     </div>
//   );
// };

class App extends React.Component {

  unsubscribeFromAuth = null;

  //call componentDidMount to fetch something from the database however do not want
  // constantly remounting component so called onAuthStateChanged to determine user's state
  componentDidMount() {
    const { setCurrentUser } = this.props;

    //auth.onAuthStateChanged returns a function
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      //check if user is signed in 
      if (userAuth) {
        // check if DB have updated at that user
        const userRef = await createUserProfileDocument(userAuth);

        //user userRef object to update state
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            // update state with snapShot id and the data in snapshot
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/** Route have the location, match and history property */}
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>

      </div >
    );
  }
}

//dispatch shows whatever obj you're passing to me is an action obj that I will pass to every reducer
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

//connect App to the Second argument of connect 
export default connect(null, mapDispatchToProps)(App);
