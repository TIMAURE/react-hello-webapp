import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const Modal = (props) => {
    const { actions } = useContext(Context);

    const handleDelete = () => {
        actions.deleteOneContact(props.id); 
        props.onClose(); 
    };

    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "block" : "none" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={props.onClose}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Warning: Changes made are applied after this point...</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={props.onClose}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={handleDelete}>
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Modal;