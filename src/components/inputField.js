import React, {useState} from 'react';

function inputField({label, name, inputType, value, changeHandler}) {

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

export default inputField;