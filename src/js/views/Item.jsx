import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Item = () => {
	const params = useParams()
	const { id } = params;
	const { category } = params;

	const { actions } = useContext(Context);

	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(async () => {
		const data = await actions.fetchItem({ id: id, category: category });
		setItem(data);
		setLoading(false);
    }, []);

    if (loading) {
        return null;
    }

	const properties = Object.keys(item.properties).map((key, index) => <li className="list-group-item" key={index}>{key}: {item.properties[key]}</li>);

	return (	
		<div className="container">
			<div className="row">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{item.description}</h5>
					</div>
					<ul className="list-group list-group-flush">
						{properties}
					</ul>
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

