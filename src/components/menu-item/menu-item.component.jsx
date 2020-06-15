import React from 'react';
import './menu-item.styles.scss';

//destructure props to its individual values
const MenuItem = ({ title, imageUrl, size }) => (
    // add css property style into div to set background image
    //style takes an object of css values
    <div
        //dynamically add size into className by string interpolation
        className={`${size} menu-item`}
    >
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);
export default MenuItem;