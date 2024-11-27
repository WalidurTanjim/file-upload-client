import React from 'react';

const User = ({ user }) => {
    const { username, email, password, image_secure_url } = user;

    return (
        <div className="container mx-auto p-6 w-full md:w-[500px] mb-4 border rounded-md">
            <img src={image_secure_url} alt="No Image Available" className='rounded-md w-full h-[300px] mb-3' />

            <div>
                <h1 className='text-lg font-medium text-slate-700'>{username}</h1>
                <p className='text-xs text-gray-600 rounded-full inline-block px-3 py-1 bg-slate-300'>{email}</p>
            </div>
        </div>
    );
};

export default User;