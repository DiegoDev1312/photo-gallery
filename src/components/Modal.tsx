import { GalleryProps } from "@/types/Gallery";

type ModalProps = {
    modalVisible: boolean;
    changeModalVisible: VoidFunction;
    modalImage: string;
}

export function Modal({ changeModalVisible, modalImage, modalVisible }: ModalProps) {
    if (!modalVisible) {
        return null;
    }

    return (
        <div className="bg-black/80 h-screen w-screen fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center">
            <img src={modalImage} className=" object-cover w-full h-2/4 md:w-4/5 md:h-full" />
            <button onClick={changeModalVisible} className="absolute top-8 right-10 md:right-15">
                <img src="./close-icon.svg" alt="close-modal-icon" className="h-8 w-8" />
            </button>
        </div>
    );
}