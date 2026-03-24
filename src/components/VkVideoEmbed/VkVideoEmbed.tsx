import { memo } from 'react';
import { convertVideoId } from '@/utils/convertVideoId';

type VkVideoEmbedProps = {
  height?: number;
  videoId: string;
  width?: number;
};

export const VkVideoEmbed = memo(function VkVideoEmbed({
  videoId,
  height = 360,
  width = 640,
}: VkVideoEmbedProps) {
  const src = `https://vkvideo.ru/video_ext.php?oid=-${convertVideoId(videoId)}`;

  return (
    <div className="embed-responsive">
      <iframe
        allow="encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
        height={height}
        src={src}
        title="vk-video"
        width={width}
      />
    </div>
  );
});
