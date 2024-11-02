import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addFavoriteName } from '../../Utils/LS';


const CofffeDetals = () => {
    const {Name}=useParams()
    const coffeeDetailsData=useLoaderData()
    console.log(Name,coffeeDetailsData);
    const [DetailsData,setDetailsData]=useState([])
    useEffect(()=>{
        const CoffeeDetails=coffeeDetailsData.find(data=>data.name===Name)
        setDetailsData(CoffeeDetails)

    },[])

    const {name,image,category,ingredients,nutrition_info,origin,type,description,making_process,rating,popularity}=DetailsData;
    console.log(DetailsData,'hay jsd');

    const favoriteHandle=(name)=>{
        addFavoriteName(name)
        
    }
    
    
    return (
        <div className='w-11/12 mx-auto'>
            <div className="my-12 overflow-hidden">
                <img className='w-full h-[500px] rounded-xl ' src={image} alt="" />
                <div className="flex justify-between items-center">
                    <div className="">
                        <h1 className='text-3xl font-bold'>  {name}</h1>
                        <h2>Popularity : {popularity}</h2>
                        <h3>Rating : {rating}</h3>
                    </div>
                    <div className="">
                        <button onClick={()=>favoriteHandle(name)}  className='btn bg-yellow-400 text-xl font-bold'>Favorite</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CofffeDetals;