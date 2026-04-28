import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const PhotoDetailsPage = async ({ params }) => {


    const { id } = await params;
    // console.log(id);
    const res = await fetch("https://pixgen-poject.vercel.app/data.json")
    const photos = await res.json();
    //   console.log(photos,  'photos')

    const photo = photos.find(p => p.id == id)
    //    console.log(photo,  'photo')
    return (
        <div className="px-4 mt-5 flex justify-center items-center ">
            <Card className="p-4 border rounded-xl shadow-md flex flex-col
             hover:shadow-lg transition-all duration-300 w-[600px] h-[700px]">
                <h1 className="mt-4 text-lg font-semibold ">
                    {photo?.title || "No Title"}
                </h1>
                <div className="w-full flex justify-center relative aspect-square overflow-hidden">
                    <Image
                        src={photo?.imageUrl}
                        alt={photo?.title || "image"}
                        fill
                        className="rounded-lg object-cover "
                    />
                </div>
                <p className="text-gray-500 text-sm">
                    {photo.prompt || ""}
                </p>
                <p className="text-gray-500 text-sm">
                    {photo.category || ""}
                </p>

                <p className="text-gray-500 text-sm">
                    {photo.model || ""}
                </p>
                <div className='flex gap-5'>
                    <p className='flex items-center gap-1'><FaHeart className='text-pink-500' />{photo.likes}</p>
                    <p className='flex items-center gap-1'><MdOutlineFileDownload className='text-purple-500' />{photo.downloads}</p>
                </div>
                <p>{photo.createdAt}</p>
                
                <div className="flex flex-wrap gap-2 pt-4">
                    {photo.tags?.map((tag, i) => (
                        <span
                            key={i}
                            className="text-xs bg-gray-100 px-3 py-1 rounded-full text-purple-600">
                            #{tag}
                        </span>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default PhotoDetailsPage;