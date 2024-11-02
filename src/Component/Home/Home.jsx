import React from 'react';
import Banner from './Banner';
import { Outlet, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Category from './Category';
import CoffeeCard from '../Card/CoffeeCard';

const Home = () => {
    const category=useLoaderData()
    const navigate=useNavigate()
    
    
    return (
        <div>
            <Banner></Banner>
            <Category key={category.id} category={category} ></Category>
            <Outlet></Outlet>

            <div className="w-11/12 mx-auto my-12">
                <button className='bg-yellow-400 btn text-xl font-bold' onClick={()=>navigate('/coffee')} >View All</button>
            </div>

        </div>
    );
};

export default Home;