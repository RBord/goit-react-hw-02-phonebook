import React from 'react';

const ContactList = ({value}) => {
    console.log(value)
    return (
        <ul value={value}>
            {value.map(({ id, name, number }) => {
                return (
                    <li key={id}>{name}: {number}</li>
                )
            })}
        </ul>
    )
}
export default ContactList;