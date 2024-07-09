

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			listContacts: [],
			
		},

		actions: {
			
			createAgenda: async () => {
				try {
					const response = await fetch(
						`https://playground.4geeks.com/contact/agendas/TIMAURE`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							}
						}
					);
			
					if (!response.ok) {
						throw new Error(`API error: ${response.statusText}`);
					}
			
					const data = await response.json();
					console.log("New agenda created:", data);
			
				} catch (error) {
					console.error("Error creating agenda:", error);
				}
			},
			
			getContacts: async () => {
				try {
					const response = await fetch(
						`https://playground.4geeks.com/contact/agendas/TIMAURE`
					);
			
					if (response.status === 404) {
						await getActions().createAgenda();
					}
			
					if (!response.ok) {
						throw new Error(`API error: ${response.statusText}`);
					}
			
					const data = await response.json();
					setStore({ listContacts: data.contacts });
					console.log("Contacts retrieved successfully:", data.contacts);
			
				} catch (error) {
					console.error("Error getting contacts:", error);
				}
			},
			
			   
				
			
				createOneContact: newContact => {
					fetch("https://playground.4geeks.com/contact/agendas/TIMAURE/contact", {
						method: "POST",
						body: JSON.stringify({
							name: `${newContact.name}`,
							email: `${newContact.email}`,
							agenda_slug: `${newContact.TIMAURE}`,
							address: `${newContact.address}`,
							phone: `${newContact.phone}`
						}),
						headers: {
							"Content-Type": "application/json"
						}
					})
						.then(response => {
							console.log(response);
							return response.json();
						})
						.then(data => console.log(data))
						.catch(error => console.log(error));
				},
				deleteOneContact: id => {
					fetch(`https://playground.4geeks.com/contact/agendas/TIMAURE/contacts/${id}`, {
						method: "DELETE"
					})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						getActions().getAllAgenda();
					})
					.catch(error => console.log(error));
				},
				updateOneContact: (id, data) => {
					fetch(`https://playground.4geeks.com/contact/agendas/TIMAURE/contacts/${id}`, {
						method: "PUT",
						body: JSON.stringify({
							name: data.name,
							email: data.email,
							agenda_slug: "TIMAURE", 
							address: data.address,
							phone: data.phone
						}),
						headers: {
							"Content-Type": "application/json"
						}
					})
					.then(response => {
						if (!response.ok) {
							throw new Error(`HTTP error! Status: ${response.status}`);
						}
						console.log(response);
						return response.json();
					})
					.then(updatedContact => {
						console.log("Updated contact:", updatedContact);
						
						getActions().getContacts();
					})
					.catch(error => {
						console.error("Error updating contact:", error);
					});
				},
				
				 
				
				   
			}

		};
	};
	
	export default getState;