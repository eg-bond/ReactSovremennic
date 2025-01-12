import { useImgLoaded } from '../../hooks/useImgLoaded';

export const FilmImg = ({ link, title }: {
  link: string; title: string;
}) => {
  const { imgLoaded, onLoad } = useImgLoaded(link);

  return (
    <div className="selectedMovie--leftFr">
      <div className={`selectedMovie__image ${!imgLoaded ? 'skeleton' : ''}`}>
        <img
          alt={title}
          className="fadeIn"
          key={link + 'SM'}
          src={`Images/description/${link}_D.webp`}
          onLoad={onLoad}
        />
      </div>
    </div>
  );
};
