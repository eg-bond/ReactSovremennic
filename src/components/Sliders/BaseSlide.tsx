import { Link } from 'react-router-dom';
import { SplideSlide } from '@splidejs/react-splide';
import { useImagesLoaded } from '@/hooks/useImagesLoaded';

interface IBaseSlide {
  alt: string;
  link?: {
    href?: string;
    to?: string;
  };
  src: string;
  tabIndex?: number;
}

const SlideWrapper = ({
  children,
  link,
  tabIndex,
}: {
  children: React.ReactNode;
  link?: IBaseSlide['link'];
  tabIndex?: number;
}) => {
  if (link?.to) {
    return (
      <Link tabIndex={tabIndex} to={link.to}>
        {children}
      </Link>
    );
  }
  if (link?.href) {
    return (
      <a href={link.href} tabIndex={tabIndex}>
        {children}
      </a>
    );
  }
  return <>{children}</>;
};

export const BaseSlide = ({
  alt,
  src,
  link,
  tabIndex,
}: IBaseSlide) => {
  const { allImgLoaded, onLoad } = useImagesLoaded(1);

  return (
    <SplideSlide>
      <SlideWrapper link={link} tabIndex={tabIndex}>
        <div className="imgContainer_23 opacity_on_hover">
          <img
            alt={alt}
            className={`imgContainer__img transition ${!allImgLoaded ? 'skeleton' : ''}`}
            src={src}
            onLoad={onLoad}
          />
        </div>
      </SlideWrapper>
    </SplideSlide>
  );
};
