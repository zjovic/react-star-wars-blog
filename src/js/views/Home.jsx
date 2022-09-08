import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				{store.planets.map((planet) => {
					return (
						<div className="col-4" key={planet.uid}>
							<div className="card">
								<img src="" className="card-img-top" alt="" />
								<div className="card-body">
									<h5 className="card-title">{planet.name}</h5>

									<Link to={`/planet/${planet.uid}`}>
										<button className="btn btn-primary">Details</button>
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
