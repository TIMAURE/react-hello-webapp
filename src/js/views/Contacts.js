import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal.js";
import { ModalUpdate } from "../component/ModalUpdate.js";


export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		showModalUpdate: false,
		id: null
	});

	const { store, actions } = useContext(Context);

	useEffect(() => {
		// const listContacts =
		actions.getContacts();
	}, []);
	console.log(store.listContacts);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.listContacts.map(item => (
							<ContactCard
								key={item.id}
								name={item.name}
								address={item.address}
								phone={item.phone}
								email={item.email}
								onDelete={() => setState({ showModal: true, id: item.id })}
								onUpdate={() => setState({ showModalUpdate: true, id: item.id })}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal id={state.id} show={state.showModal} onClose={() => setState({ showModal: false })} />
			
			<ModalUpdate
				id={state.id}
				name={store.listContacts.find(contact => contact.id === state.id)?.name || ""}
				email={store.listContacts.find(contact => contact.id === state.id)?.email || ""}
				phone={store.listContacts.find(contact => contact.id === state.id)?.phone || ""}
				address={store.listContacts.find(contact => contact.id === state.id)?.address || ""}
				show={state.showModalUpdate}
				onClose={() => setState({ showModalUpdate: false })}
			/>
		</div>
	);
};