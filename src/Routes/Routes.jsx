import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import CoffeeCard from "../Component/Card/CoffeeCard";
import CofffeDetals from "../Component/Details/CofffeDetals";
import Cofffee from "../Component/Cofffee/Cofffee";
import Favorite from "../Component/Favorite/Favorite";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch(`../Category.json`),
            children:[
                {
                   path:'/',
                   element:<CoffeeCard></CoffeeCard> ,
                   loader:()=>fetch(`../coffee.json`)
                   
                },
                {
                    path:'/category/:categoryName',
                    element:<CoffeeCard></CoffeeCard>,
                    loader:()=>fetch(`../coffee.json`)
                }
            ]
            
        },
        {
            path:'details/:Name',
            element:<CofffeDetals></CofffeDetals>,
            loader:()=>fetch(`../coffee.json`)

        },
        {
            path:'/coffee',
            element:<Cofffee></Cofffee>,
            loader:()=>fetch(`../coffee.json`)
        },
        {
            path:'/dashboard',
            element:<Favorite></Favorite>,
            loader:()=>fetch(`../coffee.json`)
        }
      ]
    },
  ]);

export {router}