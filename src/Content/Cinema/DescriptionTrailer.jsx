import React, { useEffect, useState } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

export const DescriptionTrailer = ({ description, trailer_src, siteMode }) => {
  const ytFrame = () => {
    return (
      <LiteYouTubeEmbed
        id={trailer_src}
        title='cinema_trailer'
        poster='hqdefault'
      />
    )
  }

  console.log('trailer render')
  return (
    <div className={`padding_15xs `}>
      <p className='lucida_font description'>{description}</p>

      {siteMode === 'default' && (
        // <div className='embed-responsive embed-responsive-16by9'>
        //   <iframe
        //     src={'https://www.youtube.com/embed/' + props.trailer_src}
        //     allowFullScreen
        //     title='film_trailer_desktop'
        //   />
        // </div>
        <div className='embed-responsive embed-responsive-16by9'>
          {ytFrame()}
        </div>
      )}
    </div>
  )
}
