import React from 'react';

function InputField({label, name, inputType, value, changeHandler}) {

    return (
        <label>
            {label}
            <input
                type = {inputType}
                name = {name}
                value = {value}
                onChange={changeHandler}
            />
        </label>

    )
}

export default InputField;