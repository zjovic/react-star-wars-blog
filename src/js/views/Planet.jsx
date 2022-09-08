import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Planet = props => {
	const params = useParams()
	const { id } = params;

	const [planet, setPlanet] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchPlanet = async (id) => {
		let data;

		try {
			const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
			data = await response.json();
		} catch (error) {
			console.log(error);
		}
	
		setPlanet(data.result);
		setLoading(false);
	}

	useEffect(() => {
        if(!planet && id) {
            fetchPlanet(id);
        }
    }, []);

	

	if (loading) {
		return <p className="text-center">Loading...</p>
	}

	return (	
		<div className="container">
			<div className="row">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{planet.properties.name}</h5>
						<p className="card-text">{planet.description}</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">Climate: {planet.properties.climate}</li>
						<li className="list-group-item">Population: {planet.properties.population}</li>
						<li className="list-group-item">Terrain: {planet.properties.terrain}</li>
					</ul>
					<div className="card-body">
						<a href={planet.properties.url} className="card-link">More details</a>
					</div>
				</div>

				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

