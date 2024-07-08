import React, { useEffect, useState } from "react";

import { PropTypes } from "prop-types";

import { Context } from "../store/appContext";

export const ContactCard = props => {
    const [ state, setState] = useState ({});

    return (
        <li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src= "https://upload.wikimedia.org/wikipedia/commons/1/1b/Curiosidades_con_Mike.jpg" alt="Mike " className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button className="btn" onClick={() => props.onUpdate()}>
							<i className="fas fa-pencil-alt mr-3" />
						</button>
						<button className="btn" onClick={(getActions) => props.onDelete({})}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{props.name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(0251) 237-5823"
					/>
					<span className="text-muted small">{props.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.email}</span>
				</div>
			</div>
		</li>
		
         
    );
	
};
ContactCard.prototype ={
	history: PropTypes.object,
	onDelete: PropTypes.func,
	onUpdate: PropTypes.func,
	email: PropTypes.string,
	name: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string
};
ContactCard.defaulProps ={
	onDelete: null
};