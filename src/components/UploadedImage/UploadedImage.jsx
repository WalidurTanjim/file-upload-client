import React from 'react'
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";

// Import required actions.
import { sepia } from "@cloudinary/url-gen/actions/effect";

const UploadedImage = ({ imagePublicId }) => {
    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dnsyloqjn'
        }
    });

    // Use the image with public ID, 'front_face'.
    const myImage = cld.image(imagePublicId);

    return (
        <>
            <AdvancedImage cldImg={myImage} style={{ width: '100%', height: '100%', borderRadius: '6px', }} />
        </>
    );
};

export default UploadedImage;