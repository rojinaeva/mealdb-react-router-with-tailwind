import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    // console.log(props.user);
    const {id,name,email,phone}=props.user;

    return (
        <div className='border-2 rounded-lg bg-slate-100 mb-4 mt-4 p-4'>
            <h3>ID: {id}</h3>
            <h4>ID: {name}</h4>
            <p>email : {email}</p>
            <p>phone : {phone}</p>
            <Link to={`/user/${id}`}><button className='text-blue-700 text-lg font-medium'>show details</button></Link>
        </div>
    );
};

export default User;