import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Card = ({card,handleRemove}) => {
    const {name,image,category,ingredients,nutrition_info,origin,type,description,making_process,rating,popularity}=card
    const {pathname}=useLocation()
    return (
        <div className='relative'>
            <Link to ={`/details/${name}`}>
            <div className="card bg-base-100 relative  shadow-xl">
                <figure className=' '>
                    <img className='h-60 w-full transition-transform duration-300 transform hover:scale-150 '
                    src={image}
                    alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>category : {category}</p>
                    <p>Type : {type}</p>
                    <p>origin : {origin}</p>
                    <p>Rating : {rating}</p>
                    <p>populer : {popularity}</p>
                    
                </div>
            </div>

            </Link>
            {
                pathname==='/dashboard' && <div className='absolute -top-4 -right-4'>
                    <button onClick={()=>handleRemove(name)} className='h-10 shadow-xl w-10 bg-yellow-400 rounded-full'><i class="fa-solid fa-trash-can"></i></button>
                </div>
            }

        </div>
    );
};

export default Card;