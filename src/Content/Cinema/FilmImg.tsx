export const FilmImg = ({ link, title }: { link: string; title: string }) => {
  return (
    <div className='selectedMovie--leftFr'>
      <div className={'selectedMovie__image skeleton'}>
        <img
          src={`./Images/description/${link}_D.webp`}
          alt={title}
          key={link + 'SM'}
        />
      </div>
    </div>
  )
}
