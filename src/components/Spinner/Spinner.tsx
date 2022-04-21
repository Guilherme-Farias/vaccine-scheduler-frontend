import VisuallyHidden from 'components/VisuallyHidden';
import React from 'react';
import theme from 'styles/theme';
import * as S from './styles';

type ThemeColors = typeof theme.colors;

export type SpinnerProps = {
  color?: keyof Omit<ThemeColors, 'mainBg' | 'minorBg'>;
};

const Spinner: React.FC<SpinnerProps> = ({
  color = 'gray-400',
}: SpinnerProps) => (
  <S.Container role="status" color={color}>
    <VisuallyHidden>Carregando...</VisuallyHidden>
  </S.Container>
);

export default Spinner;
