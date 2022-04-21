import React from 'react';
import MaxWidthWrapper from 'components/MaxWidthWrapper';
import * as S from './styles';

export type FormTemplateProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const FormTemplate: React.FC<FormTemplateProps> = ({
  title,
  description,
  children,
}: FormTemplateProps) => (
  <MaxWidthWrapper>
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <section>{children}</section>
    </S.Container>
  </MaxWidthWrapper>
);

export default FormTemplate;
