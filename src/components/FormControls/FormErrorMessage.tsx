import styled, { css } from 'styled-components/macro';

const FormErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.sm};
  `}
`;
FormErrorMessage.defaultProps = {
  role: 'alert',
};

export { FormErrorMessage };
