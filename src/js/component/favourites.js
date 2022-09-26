import React, { useContext } from 'react'
import { Context } from '../store/appContext';

const Favourites = () =>{
    const { store, actions } = useContext(Context);

    const handleRemoveFavourite = (id) => {
		actions.removeFavourite(id);
	}
    
    return(
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                Favourites <span className="badge bg-secondary">{store.favourites?.length}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                {
                    store.favourites?.length > 0
                    ?
                    store.favourites.map((favourite, index) => {
                        return (
                            <li key={index} className="dropdown-item ">
                                <a href={favourite.url} className="text-decoration-none">{favourite.name}</a>
                                <span className="float-end ms-2" type="button" onClick={() => handleRemoveFavourite(favourite.uid)}>X</span>
                            </li>
                        )
                    })
                    :
                    <li className="text-center">Poof... nothing here</li>
                }
            </ul>
        </div>
    )
}

export default Favourites;
