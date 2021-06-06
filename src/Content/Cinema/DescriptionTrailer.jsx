import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

export const DescriptionTrailer = ({ description, trailer_src, siteMode }) => {
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
    <div className={`descTrailer--grid`}>
      <p className='selectedMovie__description'>{description}</p>

      {siteMode === 'default' && <YouTubeFrame />}
    </div>
  )
}
