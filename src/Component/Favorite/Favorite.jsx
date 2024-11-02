import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getFavoriteName, removeFavorite } from '../../Utils/LS';
import Card from '../Card/Card';

const Favorite = () => {
    const favoriteData=useLoaderData();
    console.log(favoriteData.length);
    const [favorite,setFavoriteData]=useState([])

    
    
    useEffect(()=>{
        if (favoriteData.length>0) {
            const getData=getFavoriteName()
            const saveData=[]
            for (const favorite of getData){
                const favoriteDataMain=[...favoriteData].find(name=>name.name===favorite)
                console.log(favoriteDataMain);
                if (favoriteDataMain) {
                    saveData.push(favoriteDataMain)
                }
                
                
            }
            setFavoriteData(saveData)

            
            
            
        }
    },[])

    console.log(favorite,'favvvvvv');
    
    
    const handleRemove=(name)=>{
        removeFavorite(name)
        
        console.log('kaj hoccay',name);
        const favRit=favorite.filter(cof=>cof.name!==name)
        setFavoriteData(favRit)
        console.log(favRit,'atai hoi vai');
        
        
        
    }
    
    return (
        <div>
            <div className=" ">
                {
                    favorite.length<1 && <h1 className='h-[384px] my-auto flex items-center justify-center text-center font-extrabold text-6xl '>Not Found Favorite Add <span className='text-rose-400'><i class="fa-solid fa-heart-circle-minus"></i></span> </h1>
                }
            </div>


            <div className="grid w-11/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {
                    favorite.map(favorite=><Card card={favorite} handleRemove={handleRemove} ></Card>)
                }

            </div>
        </div>
    );
};

export default Favorite;