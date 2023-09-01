import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users=useLoaderData();
    // console.log(users);
    return (
        <div className=' mt-12 mx-8 md:grid grid-cols-3 gap-8'>
           
            {
                users.map(user=><User
                key={user.id}
                user={user}></User>)
            }
        </div>
    );
};

export default Users;