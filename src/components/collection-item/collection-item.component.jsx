import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
    const { name, imageUrl, price } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted >Add To Cart</CustomButton>
        </div>
    )
};

// mapDispatchToProps, take updated state and update the collection-item component
//create a new function: addItem that will go into collectionItem as a props
// creates the addItem Action, initialize payload with item and dispatch  
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
//dispatch into the store which go to redux

export default connect(null, mapDispatchToProps)(CollectionItem);