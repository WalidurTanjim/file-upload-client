import axios from 'axios';
import React, { useState } from 'react';
import UploadedImage from '../../components/UploadedImage/UploadedImage';

const Home = () => {
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    const [imagePublicId, setImagePublicId] = useState('');
    // console.log("File:", file);
    // console.log("Image:", image);
    // console.log("Image public id:", imagePublicId);

    // previewFile
    const previewFile = file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImage(reader.result);
        }
    }

    // handleChange
    const handleChange = e => {
        const photoFile = e.target.files[0];
        setFile(photoFile);
        previewFile(photoFile);
    }

    // handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await axios.post('http://localhost:5000', {
                image: image
            })
            console.log(result.data);
            const image_public_id = result?.data.public_id;
            setImagePublicId(image_public_id);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <div className="container mx-auto px-6 py-10">
                <form className='w-full mx-auto md:w-[550px]' onSubmit={handleSubmit}>
                    <div className='username mb-3'>
                        <label htmlFor="username" className='text-sm text-slate-700 font-medium'>Full Name</label>
                        <input type="text" name="username" id="username" className="file-input file-input-bordered w-full px-2"  />
                    </div>

                    <div className='email mb-3'>
                        <label htmlFor="email" className='text-sm text-slate-700 font-medium'>Email Address</label>
                        <input type="email" name="email" id="email" className="file-input file-input-bordered w-full px-2"  />
                    </div>

                    <div className='password mb-3'>
                        <label htmlFor="password" className='text-sm text-slate-700 font-medium'>Password</label>
                        <input type="text" name="password" id="password" className="file-input file-input-bordered w-full px-2"  />
                    </div>

                    <div className='photo mb-3'>
                        <label htmlFor="fileInput" className='text-sm text-slate-700 font-medium'>Photo</label>
                        <input type="file" name="photo" id='fileInput' className="file-input file-input-bordered w-full" required accept='image/png, image/jpg, image/jpeg' onChange={e => handleChange(e)} />
                    </div>

                    <button type='submit' className="btn btn-primary w-full">Primary</button>
                </form>

                <div className='mt-10 w-full md:w-[550px] h-[300px] mx-auto rounded-xl border p-3'>
                    <img src={image} alt="No image available" className='w-full h-full rounded-md' />
                </div>

                <div className='mt-10 w-full md:w-[550px] h-[300px] mx-auto rounded-xl border p-3'>
                    <UploadedImage imagePublicId={imagePublicId} />
                </div>
            </div>
        </div>
    );
};

export default Home;