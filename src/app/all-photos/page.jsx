import React from 'react';
import PhotoCard from '../../components/photocard/PhotoCard';

const AllPhotosPage = async () => {
      const res = await fetch("https://pixgen-poject.vercel.app/data.json")
        const photos = await res.json();
        // console.log(photos,  'photos')

    return (
        <div>
           <h1 className='font-bold text-3xl text-center my-5 '> All Photos</h1>

           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto'>
             {
                photos.map((photo)=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
             }
           </div>
        </div>
    );
};

export default AllPhotosPage;