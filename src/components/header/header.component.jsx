import React from 'react';
import { Link } from 'react-router-dom';
//Not JSX file so importing .svg file as a React Component
import { ReactComponent as Logo } from '../../assests/crown.svg';
import { auth } from '../../firebase/firebase.utils';
//connect: higher order component that allows us to connect to any redux
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'> SHOP </Link>
            <Link className='option' to='/shop'> CONTACT </Link>
            {
                currentUser ?
                    //onClick takes a function as a param
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>{
            hidden ? null : <CartDropDown />
        }
    </div>
);

//access root reducer state
//destructure the state further down to user and cart
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    //currentUser is the name of prop to pass into Header
    currentUser,
    hidden
});

//pass connect with two function(second function optional) and return a new higher order function to be placed in Header
//first function pass to connect will allow access to reducer state
export default connect(mapStateToProps)(Header);