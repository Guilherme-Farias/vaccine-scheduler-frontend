import React from 'react';

import Logo from 'components/Logo';
import MaxWidthWrapper from 'components/MaxWidthWrapper';
import VisuallyHidden from 'components/VisuallyHidden';

import { FaBars as MenuIcon, FaTimes as CloseIcon } from 'react-icons/fa';
import * as S from './styles';

const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <S.Container>
      <MaxWidthWrapper>
        <S.Content>
          <S.NavLink to="/" end>
            <Logo />
          </S.NavLink>

          <S.DesktopNavigation>
            <S.NavList>
              <S.NavListItem>
                <S.NavLink
                  to="/agendamentos"
                  title="Página de listagem de agendamentos"
                  end
                >
                  Agendamentos
                </S.NavLink>
              </S.NavListItem>

              <S.NavListItem>
                <S.NavLink
                  to="/agendamentos/novo"
                  title="Página para criação de um novo agendamento"
                  end
                >
                  Agendar
                </S.NavLink>
              </S.NavListItem>
            </S.NavList>
          </S.DesktopNavigation>

          <S.MobileActions>
            <S.IconContainer onClick={() => setShowMobileMenu(true)}>
              <MenuIcon size={24} />
              <VisuallyHidden>Abrir menu</VisuallyHidden>
            </S.IconContainer>
          </S.MobileActions>

          <S.MobileMenu
            isOpen={showMobileMenu}
            onDismiss={() => setShowMobileMenu(false)}
          >
            <S.MobileContent aria-label="Menu de navegação">
              <S.CloseIconContainer onClick={() => setShowMobileMenu(false)}>
                <CloseIcon size={24} />
                <VisuallyHidden>Dispensar menu</VisuallyHidden>
              </S.CloseIconContainer>

              <S.MobileNavigation>
                <S.MobileNavList>
                  <S.NavListItem>
                    <S.NavLink
                      to="/"
                      title="Página de listagem de agendamentos"
                      end
                    >
                      Início
                    </S.NavLink>
                  </S.NavListItem>

                  <S.NavListItem>
                    <S.NavLink
                      to="/agendamentos"
                      title="Página de listagem de agendamentos"
                      end
                    >
                      Agendamentos
                    </S.NavLink>
                  </S.NavListItem>

                  <S.NavListItem>
                    <S.NavLink
                      to="/agendamentos/novo"
                      title="Página para criação de um novo agendamento"
                      end
                    >
                      Agendar
                    </S.NavLink>
                  </S.NavListItem>
                </S.MobileNavList>
              </S.MobileNavigation>
            </S.MobileContent>
          </S.MobileMenu>
        </S.Content>
      </MaxWidthWrapper>
    </S.Container>
  );
};
export default Header;
