import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    //using string interpolation for className
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;