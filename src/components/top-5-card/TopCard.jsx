import React from 'react';

import Image from 'next/image';
import PhotoCard from '../photocard/PhotoCard';

const TopCard = async () => {
    const res = await fetch("https://pixgen-poject.vercel.app/data.json")
    const photos = await res.json();
    // console.log(photos)

    const topPhotos = photos.slice(0, 5)
    // console.log(topPhotos, 'topPhotos')



    return (
        <div className=" container mx-auto">
            <h1 className='font-bold text-3xl text-center my-5'>Top Generations</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                   topPhotos.map((photo) => (

                        <PhotoCard key={photo.id} photo={photo}></PhotoCard>

                    ))
                }
            </div>
        </div>
    );
};

export default TopCard;