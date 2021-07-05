import React from 'react';
import shortid from 'shortid';

const nameInputId = shortid.generate();

const Filter = ({value, onChange }) => (
    <label htmlFor={nameInputId}>
        Find contacts by Name
        <input type="text" value={value} onChange={onChange} id={nameInputId} />
    </label>
)

export default Filter;