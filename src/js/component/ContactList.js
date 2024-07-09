import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "./ContactCard";

const ContactList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    }, []);

    return (
        <ul className="list-group">
            {store.listContacts.map(contact => (
                <ContactCard
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    address={contact.address}
                    phone={contact.phone}
                    email={contact.email}
                    onDelete={() => actions.deleteOneContact(contact.id)} 
                    onUpdate={() => console.log("Update contact", contact.id)}
                />
            ))}
        </ul>
    );
};

export default ContactList;
