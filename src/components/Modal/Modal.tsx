import { useEffect } from 'react';
import * as s from './Modal.css.ts';

export interface IModalImage {
  alt: string;
  src: string;
}

export const Modal = ({ image, onClose }: {
  image: IModalImage;
  onClose: () => void;
}) => {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      aria-label={`Image preview: ${image.alt}`}
      aria-modal="true"
      className={s.modalOverlay}
      role="dialog"
      onClick={onClose}
    >
      <div className={s.modalContent}>
        <img
          alt={image.alt}
          className={s.modalImage}
          src={image.src}
        />
      </div>
    </div>
  );
};
