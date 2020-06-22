import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-and-sign-up.styles.scss';

//using function instead of class because state will be in the sign in/ sign up components
const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
    </div>
);

export default SignInAndSignUpPage;