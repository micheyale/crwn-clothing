import React from 'react';
//withRouter - Higher Order Component (a function that takes a component as a param, returning a modified component) 
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

//destructure props to its individual values
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    // add css property style into div to set background image
    //style takes an object of css values
    <div
        //dynamically add size into className by string interpolation
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div >
);
//return a new MenuItem with access to location, history and match 
export default withRouter(MenuItem);