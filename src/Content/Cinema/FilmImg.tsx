import { useImgLoaded } from '../../hooks/useImgLoaded'

export const FilmImg = ({ link, title }: { link: string; title: string }) => {
  const { imgLoaded, onLoad } = useImgLoaded(link)

  return (
    <div className='selectedMovie--leftFr'>
      <div className={`selectedMovie__image ${!imgLoaded ? 'skeleton' : ''}`}>
        <img
          className='fadeIn'
          src={`./Images/description/${link}_D.webp`}
          alt={title}
          key={link + 'SM'}
          onLoad={onLoad}
        />
      </div>
    </div>
  )
}
