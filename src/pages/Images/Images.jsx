import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../../components/User/User';

const Images = () => {
    const loadedInfo = useLoaderData();
    // console.log(loadedInfo);

    return (
        <div>
            <div className="container mx-auto px-6 py-10 w-full md:w-[500px] h-[300px]">
                <h1 className='text-lg text-slate-700 font-medium text-center'>Registered User Info</h1>

                <div className='mt-10'>
                    {
                        loadedInfo ?
                        loadedInfo?.map((user, idx) => <User user={user} key={idx} />) :
                        <h1>No Data Available</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default Images;