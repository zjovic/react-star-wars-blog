import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./views/Home.jsx";
import { Item } from "./views/Item.jsx";
import injectContext, { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";

const App = () => {
	const basename = process.env.BASENAME || "";

	const { actions } = useContext(Context);

	useEffect(async () => {
		actions.setLoading(true);
		await Promise.all([actions.fetchPlanets(), actions.fetchCharacters(), actions.fetchStarships()])
		actions.setLoading(false);
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
						<Route exact path="/:item/:category/:id">
							<Item />
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
