import { createContext, useContext, useState, useCallback } from 'react';
import { IModalImage, Modal } from '@/components/Modal';
import { IVideoItem, VideoModal } from '@/components/VideoModal';

interface ModalContextType {
  closeModal: () => void;
  openModal: (image: IModalImage) => void;
  openVideoModal: (videos: IVideoItem[]) => void;
}

type ModalState =
  | {
    image: IModalImage; type: 'image';
  }
  | {
    type: 'video'; videos: IVideoItem[];
  }
  | null;

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [modal, setModal] = useState<ModalState>(null);

  const openModal = useCallback((image: IModalImage) => {
    setModal({ type: 'image', image });
  }, []);

  const openVideoModal = useCallback((videos: IVideoItem[]) => {
    setModal({ type: 'video', videos });
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, openVideoModal, closeModal }}>
      {children}
      {modal?.type === 'image' && (
        <Modal image={modal.image} onClose={closeModal} />
      )}
      {modal?.type === 'video' && (
        <VideoModal videos={modal.videos} onClose={closeModal} />
      )}
    </ModalContext.Provider>
  );
};
