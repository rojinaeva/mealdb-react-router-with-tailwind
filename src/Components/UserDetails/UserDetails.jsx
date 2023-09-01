import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user=useLoaderData();
    console.log(user);
    return (
        <div className='border-2 rounded-lg bg-slate-100 mb-4 mt-4'>
            <h3>ID : {user.id}</h3>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.company.name}</p>
            <p>{user.address.street}</p>
        </div>
    );
};

export default UserDetails;