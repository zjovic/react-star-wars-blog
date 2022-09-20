import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/Home.jsx";
import { Planet } from "./views/Planet.jsx";
import injectContext, { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";



//create your first component
const App = () => {
	// the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const { store, actions } = useContext(Context);

	const [initialLoad, setInitialLoad] = useState(true);

	useEffect(() => {
        if(initialLoad) {
            actions.getPlanets();
            actions.getStarships();
            actions.getCharacters();
			setInitialLoad(false);
        }
    }, []);

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/planet/:id">
							<Planet />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
