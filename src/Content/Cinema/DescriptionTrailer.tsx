import { memo } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { SpecialStateT } from '../../REDUX/special/spacialReducerT'

export const DescriptionTrailer = memo<DescriptionTrailerT>(
  function DescriptionTrailer({ description, trailer_src, fontSize }) {
    const gridClass =
      fontSize !== '26px' ? 'descTrailer--grid' : 'selectedMovie--fullFr'

    return (
      <div className={gridClass}>
        <p className='selectedMovie__description'>{description}</p>
        <div className='embed-responsive'>
          <LiteYouTubeEmbed
            id={trailer_src}
            title='cinema_trailer'
            poster='hqdefault'
          />
        </div>
      </div>
    )
  }
)

type DescriptionTrailerT = {
  description: string
  trailer_src: string
  fontSize: SpecialStateT['fontSize']
}
