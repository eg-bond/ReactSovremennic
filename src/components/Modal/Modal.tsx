import { useEffect } from 'react';
import styles from './Modal.module.css';

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
      className={styles.modalOverlay}
      role="dialog"
      onClick={onClose}
    >
      <div className={styles.modalContent}>
        <img
          alt={image.alt}
          className={styles.modalImage}
          src={image.src}
        />
      </div>
    </div>
  );
};
