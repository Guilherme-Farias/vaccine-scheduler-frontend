import React from 'react';
import MaxWidthWrapper from 'components/MaxWidthWrapper';
import * as S from './styles';

export type ListTemplateProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const ListTemplate: React.FC<ListTemplateProps> = ({
  title,
  description,
  children,
}: ListTemplateProps) => (
  <MaxWidthWrapper>
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
    {children}
  </MaxWidthWrapper>
);

export default ListTemplate;
