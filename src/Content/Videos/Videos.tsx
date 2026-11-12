import { ReelVideo } from '@/components/ReelVideo';
import * as s from './Videos.css';

// Single place to manage reel sources.
// Replace the entries with the final mp4 files once converted
// (keep the moov atom at the beginning: ffmpeg `-movflags +faststart`).
const reels = [
  { src: '/Vids/vid3.mp4', title: 'Рилс 1' },
  { src: '/Vids/vid3.mp4', title: 'Рилс 2' },
  { src: '/Vids/vid3.mp4', title: 'Рилс 3' },
];

export default function Videos() {
  return (
    <div className={s.container}>
      <h1>Видео</h1>
      <div className={s.videosGrid}>
        {reels.map(reel => (
          <ReelVideo key={reel.title} src={reel.src} title={reel.title} />
        ))}
      </div>
    </div>
  );
}
