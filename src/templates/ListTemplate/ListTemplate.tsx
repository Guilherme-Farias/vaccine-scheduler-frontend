import React from 'react';

import MaxWidthWrapper from 'components/MaxWidthWrapper';
import Spinner from 'components/Spinner';

import * as S from './styles';

export type ListTemplateProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  isLoading?: boolean;
};

const ListTemplate: React.FC<ListTemplateProps> = ({
  title,
  description,
  children,
  isLoading,
}: ListTemplateProps) => (
  <MaxWidthWrapper>
    <S.Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <S.Title>{title}</S.Title>
        {isLoading && <Spinner />}
      </div>
      <S.Description>{description}</S.Description>
    </S.Container>
    {children}
  </MaxWidthWrapper>
);

export default ListTemplate;
