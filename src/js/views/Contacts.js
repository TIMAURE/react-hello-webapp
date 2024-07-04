import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";



export const Contacts = () => {
	const { store, actions } = useContext(Context);
    
    const miFuncion =() =>{
        actions.addContact()
    };
useEffect(()=>{
    actions.getContacts()
},[])
	return (
		<div className="container">
			<ul className="list-group">
				{store.listContacts.map((item, index) => {
					return (
                        <p>{item.name}</p>
                    ) })}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
