import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

export const DescriptionTrailer = ({ description, trailer_src, siteMode }) => {
  const YouTubeFrame = () => (
    <div className='embed-responsive embed-responsive-16by9'>
      <LiteYouTubeEmbed
        id={trailer_src}
        title='cinema_trailer'
        poster='hqdefault'
      />
    </div>
  )
  return (
    <div className={`padding_15xs `}>
      <p className='description'>{description}</p>

      {siteMode === 'default' && <YouTubeFrame />}
    </div>
  )
}
