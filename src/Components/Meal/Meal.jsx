import React from 'react';


const Meal = (props) => {
    // console.log(props.meal);
    const { strCategory,idCategory,strCategoryThumb}=props.meal;
    
    return (
        
        <div className='border-2 rounded-lg bg-slate-100 mb-4 '>
            <img className='mb-4' src={strCategoryThumb} alt="" />
            <h3 className='text-orange-600 text-lg font-medium hover:text-orange-400 mb-4'>{strCategory}</h3>

    
        </div>
        
    );
};

export default Meal;



