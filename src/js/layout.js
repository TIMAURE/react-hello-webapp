import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";


import { Home } from "./views/home"
import injectContext from "./store/appContext";
import { Contacts } from "./views/Contacts.js";
import { ContactCard} from "./views/Addcontact.js";




//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				
					<Switch>
					
					<Route path="/index.html" component={Contacts} />
						<Route path="/" component={Contacts} />
						<Route path="/contacts" component={Contacts} />
						<Route path="/add" component={ContactCard} />
						<Route path="/edit" component={ContactCard} />
						<Route render={()=> <h1 className="notfound">Not found!</h1>}/>
					
					</Switch>
				
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
