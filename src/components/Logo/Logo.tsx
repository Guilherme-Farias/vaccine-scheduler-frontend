import React from 'react';

import { FaSyringe as SyringeIcon } from 'react-icons/fa';
import * as S from './styles';

const Logo: React.FC = () => (
  <S.LogoWrapper>
    <S.IconWrapper>
      <SyringeIcon />
    </S.IconWrapper>
    <S.Text>
      Minha <strong>Vacina</strong>
    </S.Text>
  </S.LogoWrapper>
);

export default Logo;
