// import React from 'react';

// import './cart-item.styles.scss';

// //destructure items properties
// const CartItem = ({ item: { imageUrl, name, quantity, price } }) => (
//     <div className='cart-item'>
//         <img src={imageUrl} alt='item' />
//         <div className='item-details'>
//             <span className='name'>{name}</span>
//             <span className='price'>{quantity} X ${price}</span>
//         </div>
//     </div>
// );

// export default CartItem;

import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} x ${price}
            </span>
        </div>
    </div>
);

export default CartItem;