import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const [open,setOpen]=useState(false);
    return (
        <nav className='flex justify-between px-16 py-6 bg-slate-300'>
            <h3 className='text-3xl text-teal-500 font-bold'>The MealDB Restaurant</h3>
            <div >
                <div onClick={()=>setOpen(!open)}  className='md:hidden'>
                    <span className=' flex justify-end'>
                        {
                        open?
                        <XMarkIcon className="h-6 w-6 text-blue-500" />:
                        <Bars3Icon className="h-6 w-6 text-blue-500" />
                        }
                    </span>
                    
                    
                </div>
                <ul className={`md:flex md:static absolute duration-500  bg-slate-300 px-4 ${open?'top-12':'-top-48'}`}>
                 
                <li className='md:mr-2 text-lg text-black font-semibold  hover:text-blue-600 ' ><ActiveLink to='/'>Home</ActiveLink></li>
                    <li className='md:mr-2 text-lg text-black font-semibold hover:text-blue-600 '><ActiveLink to='/restaurant'>Restaurant</ActiveLink></li>
                    <li className='md:mr-2 text-lg text-black font-semibold hover:text-blue-600 '><ActiveLink to='/users' >Users</ActiveLink></li>
                    <li className='md:mr-2 text-lg text-black font-semibold hover:text-blue-600 '><ActiveLink to='/login' >Login</ActiveLink></li>
                    <li className='md:mr-2 text-lg text-black font-semibold hover:text-blue-600 '><ActiveLink to='/contact'>Contact</ActiveLink></li>
                    <li className='md:mr-2 text-lg text-black font-semibold hover:text-blue-600 '><ActiveLink to='/about'>About</ActiveLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;