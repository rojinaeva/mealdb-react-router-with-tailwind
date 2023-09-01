import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Restaurant = () => {
   const mealsFood=useLoaderData();
   const meals=mealsFood.categories;
//    console.log(meals);
    
    return (
        <div className=' mt-12 mx-8 md:grid grid-cols-3 gap-8'>
           {
                meals.map(meal=><Meal
                key={meal.idCategory}
                meal={meal}></Meal>)
             }
           
           
        </div>
       
    );
};

export default Restaurant;


