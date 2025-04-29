import { Link } from 'react-router-dom';
import { useModal } from '@/contexts/ModalContext';
// @ts-expect-error: splide
import { SplideSlide } from '@splidejs/react-splide';
import { useImagesLoaded } from '@/hooks/useImagesLoaded';
import { IBaseSlide, isExternalLink, isInternalLink, ISlideImgWrapper, isModalLink } from './types';

export const SlideImgWrapper: React.FC<ISlideImgWrapper> = ({
  children,
  link,
  tabIndex,
}) => {
  const { openModal } = useModal();

  if (!link) return <>{children}</>;

  if (isModalLink(link)) {
    // TypeScript knows link.modalImage exists here
    return (
      <button
        style={{
          background: 'none',
          border: 'none',
        }}
        tabIndex={tabIndex}
        onClick={() => openModal(link.modalImage)}
      >
        {children}
      </button>
    );
  }

  if (isInternalLink(link)) {
    // TypeScript knows link.path exists here
    return (
      <Link tabIndex={tabIndex} to={link.path}>
        {children}
      </Link>
    );
  }

  if (isExternalLink(link)) {
    return (
      <a href={link.path} tabIndex={tabIndex}>
        {children}
      </a>
    );
  }

  return <>{children}</>;
};

export const BaseSlide = ({
  alt,
  imgSrc,
  link,
  tabIndex,
}: IBaseSlide) => {
  const { allImgLoaded, onLoad } = useImagesLoaded(1);

  return (
    <SplideSlide>
      <SlideImgWrapper
        link={link}
        tabIndex={tabIndex}
      >
        <div className="imgContainer_23 opacity_on_hover">
          <img
            alt={alt}
            className={`imgContainer__img ${!allImgLoaded ? 'skeleton' : ''}`}
            src={imgSrc}
            onLoad={onLoad}
          />
        </div>
      </SlideImgWrapper>
    </SplideSlide>
  );
};
