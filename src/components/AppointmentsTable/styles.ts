import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    overflow-x: auto;
    white-space: nowrap;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border: 1px solid ${theme.colors['gray-400']};
  `}
`;

const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-spacing: 0;
    text-align: center;
    font-size: ${theme.font.sizes.md};
    color: ${theme.colors['gray-800']};
  `}
`;
Table.defaultProps = {
  role: 'table',
};

const TableHead = styled.thead`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-size: ${theme.font.sizes.sm};
    color: ${theme.colors['gray-900']};
    background-color: ${theme.colors['gray-50']};

    th {
      border-bottom: 1px solid ${theme.colors['gray-200']};
    }
  `}
`;

const TableRowStripped = styled.tr`
  ${({ theme }) => css`
    border-bottom-width: 1px;

    &:nth-child(odd) {
      background-color: ${theme.colors.white};
    }
    &:nth-child(even) {
      background-color: ${theme.colors['gray-100']};
    }
    &:hover {
      background-color: ${theme.colors['gray-200']};
    }
  `}
`;

const TableCell = styled.td`
  ${({ theme }) => css`
    padding: ${theme.spacings.xl} ${theme.spacings.sm};
  `}
`;

export { Table, TableHead, TableRowStripped, TableCell };
