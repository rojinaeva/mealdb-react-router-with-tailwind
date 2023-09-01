import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import './Root.css'


const Root = () => {
    const navigation=useNavigation();
    return (
        <div>
            <Header></Header>
            <div className="flex justify-center">
                {navigation.state==="loading"?'loading....':''}
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;