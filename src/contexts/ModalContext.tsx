import { IModalImage, Modal } from '@/components/Modal';
import { createContext, useContext, useState, useCallback } from 'react';

interface ModalContextType {
  closeModal: () => void;
  openModal: (image: {
    alt: string; src: string;
  }) => void;
}

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
  const [modalImage, setModalImage] = useState<IModalImage | null>(null);

  const openModal = useCallback((image: IModalImage) => {
    setModalImage(image);
  }, []);

  const closeModal = useCallback(() => {
    setModalImage(null);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalImage && (
        <Modal image={modalImage} onClose={closeModal} />
      )}
    </ModalContext.Provider>
  );
};
