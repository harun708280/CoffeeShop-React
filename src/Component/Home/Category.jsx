import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({category}) => {
    return (
        <div className='my-12'>
            <div role="tablist" className="tabs tabs-lifted">
                {
                    category.map(category=>
                    <NavLink to={`/category/${category.category}`} role="tab" className={({isActive})=>`
                    tab text-2xl font-bold ${isActive?'tab-active':''}
                    
                    `}>
                        {category.category}

                    </NavLink>)
                }
                
            </div>
        </div>
    );
};

export default Category;