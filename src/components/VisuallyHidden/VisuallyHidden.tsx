import React from 'react';

import * as S from './styles';

export type VisuallyHiddenProps = {
  children: React.ReactNode;
};

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  children,
}: VisuallyHiddenProps) => {
  const [forceShow, setForceShow] = React.useState(false);

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Alt') {
          setForceShow(true);
        }
      };

      const handleKeyUp = () => {
        setForceShow(false);
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keydown', handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return <span>{children}</span>;
  }

  return <S.Container>{children}</S.Container>;
};
export default VisuallyHidden;
