import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// const HatsPage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Hats Page</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>

      <Switch>
        {/** Route have the location, match and history property */}
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>

    </div>
  );
}

export default App;
