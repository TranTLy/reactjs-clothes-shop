import React from 'react';
import './form-input.style.scss';


const FormInput = ({ handleChange, label, ...othersProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...othersProps} />
            {
                label ?
                    (<label className={`${othersProps.value.length > 0 ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>)
                    : null
            }
        </div>
    )
}

export default FormInput;