import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "./Modal";

export const ContactCard = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        setShowModal(true);
    };

    return (
        <li className="list-group-item">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Curiosidades_con_Mike.jpg"
                        alt="Mike"
                        className="rounded-circle mx-auto d-block img-fluid"
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                    <div className="float-right">
                        <button className="btn" onClick={props.onUpdate}>
                            <i className="fas fa-pencil-alt mr-3" />
                        </button>
                        
						<button className="btn" onClick={() => props.onDelete(props.id)}>
                            <i className="fas fa-trash-alt" />
                         </button>
                    </div>
                    <label className="name lead">{props.name}</label>
                    <br />
                    <i className="fas fa-map-marker-alt text-muted mr-3" />
                    <span className="text-muted">{props.address}</span>
                    <br />
                    <span className="fa fa-phone fa-fw text-muted mr-3" />
                    <span className="text-muted small">{props.phone}</span>
                    <br />
                    <span className="fa fa-envelope fa-fw text-muted mr-3" />
                    <span className="text-muted small text-truncate">{props.email}</span>
                </div>
            </div>
            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                id={props.id} // Pasamos el id del contacto al modal
                onDelete={props.onDelete} // Pasamos la función de eliminación al modal
            />
        </li>
    );
};

ContactCard.propTypes = {
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default ContactCard;
