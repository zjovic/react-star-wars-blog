import React, { useContext } from "react";
import { Link } from "react-router-dom";
import placeholder from '../../img/placeholder-image.png';
import { Context } from "../store/appContext";
import FavouriteIcon from '../component/favourite-icon.js';

import "../../styles/index.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const handleAddToFavourites = (item) => {
		actions.addToFavourites(item);
	}

	return (
		<div className="container">
			<div className="row">
				<h3 className="px-0 text-danger">Planets</h3>
				<div className="d-flex flex-row flex-nowrap overflow-auto px-0 pb-2 mb-5">
					{store.planets.map((planet) => {
						return (
							<div className="card" key={planet.uid}>
								<img src={placeholder} className="card-img-top" alt="" />
								<div className="card-body">
									<h5 className="card-title">{planet.name}</h5>
									<div className="d-flex flex-row justify-content-between align-items-center">
										<Link to={`/planet/${planet.uid}`}>
											<button className="btn btn-primary">Details</button>
										</Link>
										<span onClick={() => handleAddToFavourites(planet)}><FavouriteIcon /></span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="row">
				<h3 className="px-0 text-danger">Characters</h3>
				<div className="d-flex flex-row flex-nowrap overflow-auto px-0 pb-2 mb-5">
					{store.characters.map((character) => {
						return (
							<div className="card" key={character.uid}>
								<img src={placeholder} className="card-img-top" alt="" />
								<div className="card-body">
									<h5 className="card-title">{character.name}</h5>

									<div className="d-flex flex-row justify-content-between align-items-center">
										<Link to={`/planet/${character.uid}`}>
											<button className="btn btn-primary">Details</button>
										</Link>
										<span onClick={() => handleAddToFavourites(character)}><FavouriteIcon /></span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="row">
				<h3 className="px-0 text-danger">Starships</h3>
				<div className="d-flex flex-row flex-nowrap overflow-auto px-0 pb-2 mb-5">
					{store.starships.map((starship) => {
						return (
							<div className="card" key={starship.uid}>
								<img src={placeholder} className="card-img-top" alt="" />
								<div className="card-body">
									<h5 className="card-title">{starship.name}</h5>

									<div className="d-flex flex-row justify-content-between align-items-center">
										<Link to={`/planet/${starship.uid}`}>
											<button className="btn btn-primary">Details</button>
										</Link>
										<span onClick={() => handleAddToFavourites(starship)}><FavouriteIcon /></span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			
		</div>
	);
};
