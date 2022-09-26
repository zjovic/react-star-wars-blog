import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Category from '../component/category.js';

import "../../styles/index.css";

export const Home = () => {
	const { store } = useContext(Context);

	if (store.loading) {
		return <p className="text-center">Loading...</p>
	}

	return (
		<div className="container">
			{
				store.categories.map((category, index) => {
					return (
						<div className="row" key={index}>
							<h3 className="px-0 text-danger">{category}</h3>
							<Category 
								key={index} 
								id={index} 
								category={category}				
							/>
						</div>
					)
				})
			}
		</div>
	);
};
