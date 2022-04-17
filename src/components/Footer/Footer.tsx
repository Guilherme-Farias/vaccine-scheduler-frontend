import React from 'react';

import MaxWidthWrapper from 'components/MaxWidthWrapper';
import * as S from './styles';

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => (
  <S.Container>
    <MaxWidthWrapper>
      <S.Copyright>
        © {currentYear} Minha Vacina. Todos os direitos reservados.
      </S.Copyright>
    </MaxWidthWrapper>
  </S.Container>
);

export default Footer;
