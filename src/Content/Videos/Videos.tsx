import { reels } from '@/data/reels';
import { ReelVideo } from '@/components/ReelVideo';
import * as s from './Videos.css';

export default function Videos() {
  return (
    <div className={s.container}>
      {/* <h1>Видео</h1> */}
      <div className={s.videosGrid}>
        {reels.map(reel => (
          <ReelVideo key={reel.title} src={reel.src} title={reel.title} />
        ))}
      </div>
    </div>
  );
}
