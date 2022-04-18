import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { Outlet } from 'react-router-dom';

import * as S from './styles';

const Base: React.FC = () => (
  <S.Container>
    <Header />
    <S.MainSection>
      <Outlet />
    </S.MainSection>
    <Footer />
  </S.Container>
);

export default Base;
