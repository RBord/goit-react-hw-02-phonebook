import React from 'react';

const ContactList = ({value, onDeleteContact}) => {
    console.log(value)
    return (
        <ul value={value}>
            {value.map(({ id, name, number}) => {
                return (
                    <div key={id}>
                        <li>{name}: {number}</li> <button onClick={()=>onDeleteContact(id)}>Delete</button>
                    </div>
                )
            })}
        </ul>
    )
}
export default ContactList;