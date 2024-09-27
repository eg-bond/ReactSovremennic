export const imgSrc = (folder: string, key: string) =>
  `Images/sushi/${folder}/${key}.webp`;

export const animationDelay = (delay: number, multiplier: number) => {
  return (delay * multiplier).toString() + 's';
};

export const scrollToNavbar = (
  contentRef: React.RefObject<HTMLDivElement>,
  hrRef: React.RefObject<HTMLHRElement>
) => {
  if (!contentRef.current || !hrRef.current) return;

  const contentY = contentRef.current.getClientRects()[0].y;
  const hrY = hrRef.current.getClientRects()[0].y;

  if (contentY === hrY) return;

  if (contentY !== undefined && hrY !== undefined) {
    window.scrollBy(0, -(hrY - contentY));
  }
};

// animation duration same as --animationDuration in fade.scss
export const trDuration = 200;
