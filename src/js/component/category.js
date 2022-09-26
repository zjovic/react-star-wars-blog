import React, { useContext } from "react";
import { Link } from "react-router-dom";
import placeholder from '../../img/placeholder-image.png';
import { Context } from "../store/appContext";
import FavouriteIcon from '../component/favourite-icon.js';
import PropTypes from 'prop-types'

import "../../styles/index.css";

const Category = ({ category, id }) => {
	const { store, actions } = useContext(Context);

	const handleAddToFavourites = (item) => {
		actions.addToFavourites(item);
	}

    let data;

    if (category === 'Planets') {
        data = store.planets;
    } else if (category === 'Characters') {
        data = store.characters;
    } else if (category === 'Starships') {
        data = store.starships;
    }

    if (!data) {
        return null;
    }

	return (
        <div className="d-flex flex-row flex-nowrap overflow-auto px-0 pb-2 mb-5">
            {
                data.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src={placeholder} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <Link to={`/item/${category}/${item.uid}`}>
                                        <button className="btn btn-primary">Details</button>
                                    </Link>
                                    <span onClick={() => handleAddToFavourites(item)}><FavouriteIcon /></span>
                                </div>
                            </div>
                        </div>
                    );
            })}
        </div>						
	);
};

Category.propTypes = {
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Category;