import { combineReducers } from 'redux';

import userReducer from '../redux/user/user.reducer';
import cartReducer from './cart/cart.reducer';

// takes in all the reduced slices and combine into one big state
export default combineReducers({
    //use key to identify each reducer
    user: userReducer,
    cart: cartReducer
});