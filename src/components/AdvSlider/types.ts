export enum SlideType {
  Internal = 'internal',
  External = 'external',
  Modal = 'modal',
  None = 'none',
}

// Define specific interfaces for each link type
interface BaseLink {
  type: SlideType;
}

interface InternalLink extends BaseLink {
  path: string;
  type: SlideType.Internal;
}

interface ExternalLink extends BaseLink {
  path: string;
  type: SlideType.External;
}

interface ModalLink extends BaseLink {
  modalImage: {
    alt: string;
    src: string;
  };
  type: SlideType.Modal;
}

// Union type of all possible link types
export type LinkType = InternalLink | ExternalLink | ModalLink | undefined;

// Main interface using the union type
export interface ISlideImgWrapper {
  children: React.ReactNode;
  link: LinkType;
  tabIndex?: number;
}

export interface IBaseSlide {
  alt: string;
  imgSrc: string;
  link: ISlideImgWrapper['link'];
  tabIndex?: number;
}

// Type guard functions
export const isModalLink = (link: LinkType): link is ModalLink => {
  return link?.type === SlideType.Modal;
};

export const isInternalLink = (link: LinkType): link is InternalLink => {
  return link?.type === SlideType.Internal;
};

export const isExternalLink = (link: LinkType): link is ExternalLink => {
  return link?.type === SlideType.External;
};
