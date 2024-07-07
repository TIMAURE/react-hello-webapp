import React, {useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const Modal = Props => {
    const [state, setState] = useState({});
    const { store, actions} = useContext (Context);
    const handleDelete = () =>{
        actions.deleteOneContact(Props.id);
    };
    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: Props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{Props.onClose ? (
							<button
								onClick={() => Props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: unknown consequences after this point... Kidding!</p>
					</div>
					<div className="modal-footer">
						<button
							onClick={() => {
								Props.onClose();
							}}
							type="button"
							className="btn btn-primary">
							Oh no!
						</button>
						<button
							onClick={() => {
								handleDelete();
								Props.onClose();
							}}
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal">
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
    );
};
Modal.propsTypes = {
    history: PropTypes.object,
    onclose: PropTypes.func,
    show: PropTypes.bool,
    id: PropTypes.number
};
Modal.defaulProps ={
    show: false,
    onClose: null
};