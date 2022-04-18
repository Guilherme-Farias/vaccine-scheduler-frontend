import styled, { css } from 'styled-components/macro';
import { transparentize } from 'polished';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { NavLink as NavLinkRRD } from 'react-router-dom';

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.minorBg};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${theme.spacings['9xl']};
    color: ${theme.colors.white};
  `}
`;

export const DesktopNavigation = styled.nav`
  ${({ theme }) => css`
    @media ${theme.queries.phoneAndSmaller} {
      display: none;
    }
  `}
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavListItem = styled.li`
  ${({ theme }) => css`
    & + li {
      margin-left: ${theme.spacings.sm};
    }
  `}
`;

export const NavLink = styled(NavLinkRRD)`
  ${({ theme }) => css`
    display: inline-block;

    position: relative;
    color: inherit;
    font-size: ${theme.font.sizes.lg};
    margin: 3px ${theme.spacings.sm} 0;
    text-decoration: none;
    text-align: center;

    &:hover,
    &:focus,
    &.active {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        display: block;
        height: 3px;
        background-color: ${theme.colors.tertiary};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }
    }
  `};
`;

// Mobile Only
export const MobileActions = styled.div`
  ${({ theme }) => css`
    display: none;
    @media ${theme.queries.phoneAndSmaller} {
      display: revert;
    }
  `}
`;

export const IconContainer = styled.button`
  ${({ theme }) => css`
    color: inherit;
    display: block;
    border: none;
    background: transparent;
    text-align: left;
    padding: ${theme.spacings.md};
    &:focus:not(:focus-visible) {
      outline: none;
    }
  `}
`;

export const MobileMenu = styled(DialogOverlay)`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: ${transparentize(0.5, theme.colors.black)};
  `}
`;

export const CloseIconContainer = styled(IconContainer)`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.spacings.md};
    right: ${theme.spacings.md};
  `}
`;

export const MobileContent = styled(DialogContent)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 300px;
    padding: ${theme.spacings['3xl']};
    background: ${theme.colors.mainBg};
    animation: slideIn 300ms 150ms backwards;
    @keyframes slideIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0%);
      }
    }
  `}
`;

export const MobileNavigation = styled.nav`
  display: flex;
  flex: 1;
`;

export const MobileNavList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    list-style: none;
    justify-content: center;
    align-items: start;
    gap: ${theme.spacings['4xl']};
    > ${NavListItem} {
      margin-left: revert;
    }
  `}
`;
