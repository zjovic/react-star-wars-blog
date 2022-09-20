import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext';
import TrashIcon from '../component/trash-icon.js';

const Favourites = () =>{
    const { store, actions } = useContext(Context)
    
    return(
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                Favourites <span className="badge bg-secondary">{store.favourites?.length}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                {
                    store.favourites?.length > 0
                    ?
                    store.favourites.map((favourite)=>{
                        return <li key={favourite.uid} className="dropdown-item ">
                            <Link className="text-decoration-none" to={favourite.url} >{favourite.name}</Link>
                            <span className="float-end ms-2" type="button" onClick={() => actions.delete(favourite.uid)}><TrashIcon /></span>
                        </li>
                    })
                    :
                    <li className="text-center">(empty)</li>
                }
            </ul>
        </div>
    )
}

export default Favourites;
