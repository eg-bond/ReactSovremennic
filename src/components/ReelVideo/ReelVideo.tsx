import { memo } from 'react';
import * as s from './ReelVideo.css';

interface IReelVideo {
  src: string;
  /** Text for the video element (title of the reel) */
  title?: string;
}

/**
 * Video player for vertical (9/16) reels.
 *
 * The mp4 is streamed natively by the browser via HTTP Range requests:
 * playback starts before the whole file is downloaded and seeking
 * works without waiting for the full download. For this to work the
 * file must be encoded with the moov atom at the beginning (ffmpeg
 * `-movflags +faststart`).
 */
export const ReelVideo = memo<IReelVideo>(function ReelVideo({ src, title }) {
  return (
    <div className={s.wrapper}>
      <video
        controls
        playsInline
        className={s.video}
        preload="metadata"
        src={src}
        title={title}
      />
    </div>
  );
});
