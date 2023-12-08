"use client"

import { GalleryProps } from "@/types/Gallery";
import { useState } from "react";
import { Modal } from "./Modal";

type Props = {
    photos: GalleryProps[];
    onChangeVisible: (img: string) => void;
}

export function GalleryPhotos({ photos, onChangeVisible }: Props) {

    function renderGalleryImage() {
        return photos.map((photo) => {
            const handleModalPress = () => {
                onChangeVisible(photo.image);
            };

            return (
                <button
                    onClick={handleModalPress}
                    key={photo.id}
                    className="relative shadow-sm shadow-gray-500 rounded-lg transition-all ease duration-200 hover:opacity-80"
                >
                    <img src={photo.image} className="object-cover h-64 w-full rounded-lg" />
                </button>
            )
        })
    }

    return (
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 '>
            {renderGalleryImage()}
        </div>
    );
}