import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";


export const AddContact = props => {
	const [state, setState] = useState({
		
	});

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Curiosidades_con_Mike.jpg" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button className="btn" onClick={() => props.onUpdate()}>
							<i className="fas fa-pencil-alt mr-3" />
						</button>
						<button className="btn" onClick={() => props.onDelete()}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<span className=" text-muted"> <input
								type="text"
								value={props.name}
								className="form-control"
								placeholder="Full Name"
								onChange={e => setName(e.target.value)}
							/></span>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted"><input
								type="text"
								value={props.address}
								className="form-control"
								placeholder="Enter address"
								onChange={e => setAddress(e.target.value)}
							/></span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small"><input
								type="phone"
								value={props.phone}
								className="form-control"
								placeholder="Enter phone"
								onChange={e => setPhone(e.target.value)}
							/></span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate"><input
								type="email"
								value={props.email}
								className="form-control"
								placeholder="Enter email"
								onChange={e => setEmail(e.target.value)}
							/></span>
							<br></br>
							<button type="button" className="btn btn-primary" >
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