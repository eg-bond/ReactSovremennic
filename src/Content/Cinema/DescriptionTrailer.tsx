import { memo } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

type DescriptionTrailerT = {
  description: string
  trailer_src: string
  siteMode: string
  fontSize: string
}

export const DescriptionTrailer = memo<DescriptionTrailerT>(
  function DescriptionTrailer({
    description,
    trailer_src,
    siteMode,
    fontSize,
  }) {
    const gridClass =
      fontSize !== '26px' ? 'descTrailer--grid' : 'selectedMovie--fullFr'

    const YouTubeFrame = () => (
      <div className='embed-responsive'>
        <LiteYouTubeEmbed
          id={trailer_src}
          title='cinema_trailer'
          poster='hqdefault'
        />
      </div>
    )
    return (
      <div className={gridClass}>
        <p className='selectedMovie__description'>{description}</p>
        {siteMode === 'default' && <YouTubeFrame />}
      </div>
    )
  }
)
