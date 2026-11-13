// Single place to manage reel sources.
// Replace the entries with the final mp4 files once converted
// (keep the moov atom at the beginning: ffmpeg `-movflags +faststart`).
export interface IReel {
  src: string;
  title: string;
}

export const reels: IReel[] = [
  { src: '/Vids/vid1.mp4', title: 'Рилс 1' },
  { src: '/Vids/vid2.mp4', title: 'Рилс 2' },
  { src: '/Vids/vid3.mp4', title: 'Рилс 3' },
];
