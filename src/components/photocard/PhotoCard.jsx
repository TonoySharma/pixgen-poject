import { Button, Card, Chip, Link, } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const PhotoCard = ({ photo }) => {
  // console.log(photo, 'photo')
  return (
    <Card className="group border rounded-2xl overflow-hidden 
       shadow-sm hover:shadow-xl transition-all duration-300">

      {/* IMAGE */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          fill
          
          className="object-cover group-hover:scale-110 transition-transform 
      duration-500 rounded-xl"/>
        <Chip
          size="sm"
          color="success"
          className="absolute right-2 top-2 backdrop-blur-md bg-white/70">
          <Chip.Label>{photo.category}</Chip.Label>
        </Chip>

        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/40 opacity-0
     group-hover:opacity-100 transition duration-300 flex items-center
      justify-center">
          <Link  href={`/all-photos/${photo.id}`}>
            <Button
              size="sm"
              color="primary"
              className="translate-y-4 group-hover:translate-y-0 
            transition-all duration-300">
              View Details
            </Button>

          </Link>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-3 space-y-2">
        <h1 className="font-semibold text-sm line-clamp-1">
          {photo.title}
        </h1>

        <div className="flex justify-between text-gray-500 text-sm">
          <p className="flex items-center gap-1 hover:text-red-500 transition">
            <FaHeart /> {photo.likes}
          </p>

          <p className="flex items-center gap-1 hover:text-blue-500 transition">
            <MdOutlineFileDownload /> {photo.downloads}
          </p>
        </div>
      </div>

    </Card>

  );
};

export default PhotoCard;