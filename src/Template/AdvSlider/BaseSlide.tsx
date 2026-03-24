import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '@/contexts/ModalContext';
import { IBaseSlide, isExternalLink, isInternalLink, ISlideImgWrapper, isModalLink } from './types';

export const SlideImgWrapper: React.FC<ISlideImgWrapper> = ({
  children,
  link,
  tabIndex,
}) => {
  const { openModal } = useModal();

  if (!link) return <>{children}</>;

  if (isModalLink(link)) {
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
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="embla__slide">
      <SlideImgWrapper
        link={link}
        tabIndex={tabIndex}
      >
        <div className="imgContainer_23 opacity_on_hover">
          <img
            alt={alt}
            className={`imgContainer__img ${!loaded ? 'skeleton skeleton-Gray' : ''}`}
            src={imgSrc}
            onLoad={() => setLoaded(true)}
          />
        </div>
      </SlideImgWrapper>
    </div>
  );
};
