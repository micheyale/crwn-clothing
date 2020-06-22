import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    //handleChange as a place holder for return value
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            //selectively render label if we need it
            label ?
                // if value.length > 0 then add in the shrink word
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>)
                : null
        }
    </div>
);

export default FormInput;