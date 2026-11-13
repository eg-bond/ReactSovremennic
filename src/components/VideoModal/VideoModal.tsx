import { useCallback, useEffect, useState } from 'react';
import * as s from './VideoModal.css';

export interface IVideoItem {
  src: string;
  title?: string;
}

interface IVideoModal {
  onClose: () => void;
  /** Videos played one after another (playlist). */
  videos: IVideoItem[];
}

/**
 * Fullscreen modal that plays a list of videos sequentially.
 *
 * The next video starts automatically when the current one ends,
 * the last one closes the modal. User can also switch videos
 * manually with the dots or the arrow keys.
 */
export const VideoModal = ({ videos, onClose }: IVideoModal) => {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= videos.length) return;
      setCurrent(index);
    },
    [videos.length],
  );

  const handleEnded = useCallback(() => {
    if (current < videos.length - 1) {
      setCurrent(current + 1);
    } else {
      onClose();
    }
  }, [current, videos.length, onClose]);

  // Close on escape, switch videos with arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goTo(current + 1);
      if (e.key === 'ArrowLeft') goTo(current - 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goTo, current]);

  // Prevent background scrolling while the modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const video = videos[current];

  if (!video) return null;

  return (
    <div
      aria-label="Видео с караоке бара"
      aria-modal="true"
      className={s.overlay}
      role="dialog"
      onClick={onClose}
    >
      <div className={s.content} onClick={e => e.stopPropagation()}>
        <button
          aria-label="Закрыть"
          className={s.closeButton}
          type="button"
          onClick={onClose}
        >
          ×
        </button>

        <video
          autoPlay
          controls
          playsInline
          className={s.video}
          key={video.src}
          preload="metadata"
          src={video.src}
          title={video.title}
          onEnded={handleEnded}
        />

        {videos.length > 1 && (
          <div className={s.dots}>
            {videos.map((item, index) => (
              <button
                aria-current={index === current}
                aria-label={`Видео ${index + 1}${item.title ? `: ${item.title}` : ''}`}
                className={`${s.dot} ${index === current ? s.dotActive : ''}`}
                key={item.src}
                type="button"
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
