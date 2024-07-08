import React, { useState } from "react";
import PropTypes from "prop-types";

// Define la función createContact antes de utilizarla
const createContact = async (contact) => {
  try {
    const response = await 
	fetch(
      'https://playground.4geeks.com/contact/agendas/TIMAURE/contacts',{
        method: 'POST',
        body: JSON.stringify({
			name: `${contact.name}`,
			email: `${contact.email}`,
			agenda_slug: `${contact.TIMAURE}`,
			address: `${contact.address}`,
			phone: `${contact.phone}`
		}),
       headers: {
		'Content-Type': 'application/json'
	  }
  });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Contacto creado exitosamente:', data);
    return data;

  } catch (error) {
    console.error('Error al crear el contacto:', error);
  }
};

export const AddContact = (props) => {
  const [name, setName] = useState(props.name || "");
  const [email, setEmail] = useState(props.email || "");
  const [phone, setPhone] = useState(props.phone || "");
  const [address, setAddress] = useState(props.address || "");

  const handleAddContact = async () => {
    const newContact = {
      name: name,
      email: email,
      agenda_slug: "TIMAURE",
      address: address,
      phone: phone
    };
    
    const result = await createContact(newContact);
    if (result) {
      // Opcional: puedes agregar lógica para manejar el éxito, como redirigir o actualizar la UI.
      console.log('Contacto agregado exitosamente:', result);
    }
  };

  return (
    <li className="list-group-item">
      <div className="row w-100">
        <div className="col-12 col-sm-6 col-md-3 px-0">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Curiosidades_con_Mike.jpg" 
            alt="Mike Anamendolla" 
            className="rounded-circle mx-auto d-block img-fluid" 
          />
        </div>
        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
          <div className="float-right">
            <button className="btn" onClick={() => props.onUpdate()}>
              <i className="fas fa-pencil-alt mr-3" />
            </button>
            <button className="btn" onClick={() => props.onDelete()}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
          <span className="text-muted">
            <input
              type="text"
              value={name}
              className="form-control"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </span>
          <br />
          <i className="fas fa-map-marker-alt text-muted mr-3" />
          <span className="text-muted">
            <input
              type="text"
              value={address}
              className="form-control"
              placeholder="Enter address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </span>
          <br />
          <span
            className="fa fa-phone fa-fw text-muted mr-3"
            data-toggle="tooltip"
            title=""
            data-original-title="(870) 288-4149"
          />
          <span className="text-muted small">
            <input
              type="phone"
              value={phone}
              className="form-control"
              placeholder="Enter phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </span>
          <br />
          <span
            className="fa fa-envelope fa-fw text-muted mr-3"
            data-toggle="tooltip"
            data-original-title=""
            title=""
          />
          <span className="text-muted small text-truncate">
            <input
              type="email"
              value={email}
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
          <br />
          <button type="button" className="btn btn-primary" onClick={handleAddContact}>
            Add Contact
          </button>
        </div>
      </div>
    </li>
  );
};

AddContact.propTypes = {
  history: PropTypes.object,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string
};

AddContact.defaultProps = {
  onDelete: null
};