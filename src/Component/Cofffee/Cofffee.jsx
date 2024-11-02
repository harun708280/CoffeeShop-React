import React, { useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import Card from '../Card/Card';

const Cofffee = () => {
    const dataCoffee=useLoaderData()
    const [coffee,setCoffee]=useState(dataCoffee)
    
    const handleSort=(status)=>{
        if (status==='popularity') {
            const popularitySorts=[...dataCoffee].sort((a,b)=>b.popularity-a.popularity)
            setCoffee(popularitySorts)
        }
        
        else if(status==='rating'){
            const RatingSorts=[...dataCoffee].sort((a,b)=>b.rating-a.rating)
            setCoffee(RatingSorts)
        }
        
    }
    

    return (
        <div className='w-11/12 mx-auto'>

            <div className="flex justify-between items-center mt-12">
                <h1 className='text-3xl font-bold'>{`Sorts by Popularity And Rating ->`}</h1>
                <div className="space-x-8">
                    <button onClick={()=>handleSort('popularity')} className='btn bg-yellow-400 '>Sort By Popularity</button>
                    <button onClick={()=>handleSort('rating')} className='btn bg-yellow-400 '>Sort By Rating</button>

                </div>
            </div>


            {
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {
                    coffee.map(coffee=><Card key='' card={coffee}></Card>)
                }

              </div>
            }
        </div>
    );
};

export default Cofffee;