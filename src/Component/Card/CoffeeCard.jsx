import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCard = () => {
    const coffees=useLoaderData()
    const {categoryName}=useParams()
    console.log(coffees);

    const [cardData,setCartData]=useState([])
    

    useEffect(()=>{

        if (categoryName) {
            const cardDataFilter=[...coffees].filter(coffee=>coffee.category === categoryName)
            setCartData(cardDataFilter)
        }
        else{
            setCartData(coffees.slice(0,6))
        }



    },[coffees])
    console.log(cardData,'boss');
    
    
    
    return (
        <div>
           <div className="w-11/12 mx-auto grid grid-cols-3 gap-5">
              {
                cardData.map(card=><Card key={card.id} card={card}></Card>)
              }
           </div>
        </div>
    );
};

export default CoffeeCard;