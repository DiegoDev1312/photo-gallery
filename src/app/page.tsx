"use client";

import { GalleryPhotos } from "@/components/GalleryPhotos";
import { Modal } from "@/components/Modal";
import { photoList } from "@/data/photoList";
import { useState } from "react";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState('');

  function changeModalVisible() {
    setModalVisible(!modalVisible);
  }

  const handleModalPress = (image: string) => {
    changeModalVisible();
    setModalImage(image);
  };

  return (
    <main className="bg-black flex min-h-screen items-center justify-center">
      <div className="w-3/4">
        <h1 className="text-4xl text-white font-bold text-center my-4">Fotos Intergalacticas</h1>
        <GalleryPhotos photos={photoList} onChangeVisible={handleModalPress} />
        <Modal modalImage={modalImage} changeModalVisible={changeModalVisible} modalVisible={modalVisible} />
      </div>
    </main>
  )
}
