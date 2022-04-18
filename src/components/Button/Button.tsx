import React, { ButtonHTMLAttributes } from 'react';

import theme from 'styles/theme';
import * as S from './styles';

type ThemeColors = typeof theme.colors;

export type ButtonVariants = 'fill' | 'outline' | 'ghost';
export type ButtonSizes = 'small' | 'medium' | 'large';
export type ButtonColors = keyof ThemeColors;
export type ButtonFontColors = keyof ThemeColors;

export type ButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  color?: ButtonColors;
  fontColor?: ButtonFontColors;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'fill',
  size = 'medium',
  color = 'primary',
  fontColor = 'white',
  ...props
}) => {
  let Component;
  if (variant === 'fill') {
    Component = S.FillButton;
  } else if (variant === 'outline') {
    Component = S.OutlineButton;
  } else if (variant === 'ghost') {
    Component = S.GhostButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <Component size={size} color={color} fontColor={fontColor} {...props}>
      {children}
    </Component>
  );
};
export default Button;
