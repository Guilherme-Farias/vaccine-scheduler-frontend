import React from 'react';
import { useNavigate } from 'react-router-dom';

import MaxWidthWrapper from 'components/MaxWidthWrapper';
import Button from 'components/Button';

import heroImage from 'assets/images/hero-img.svg';

import * as S from './styles';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <MaxWidthWrapper>
      <S.Content>
        <section>
          <S.Typography>
            Bem vindo ao <S.Highlight>Minha vacina</S.Highlight> o sistema de
            agendamento da vacina de COVID-19
          </S.Typography>

          <S.ButtonContainer>
            <Button onClick={() => navigate('/agendamentos')}>
              Liste os agendamentos
            </Button>
            <Button onClick={() => navigate('/agendamentos/novo')}>
              Faça seu agendamento
            </Button>
          </S.ButtonContainer>
        </section>

        <img
          src={heroImage}
          alt="Enfermeira vacinando um paciente"
          title="Ilustração de uma pessoa com máscara sendo vacinada, vetor criado por Storyset - www.freepik.com/people"
        />
      </S.Content>
    </MaxWidthWrapper>
  );
};
export default Hero;
