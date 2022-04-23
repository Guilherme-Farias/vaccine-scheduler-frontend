import React from 'react';
import { useNavigate } from 'react-router-dom';

import MaxWidthWrapper from 'components/MaxWidthWrapper';
import Button from 'components/Button';

import notFoundImg from 'assets/images/not-found.svg';
import * as S from './styles';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <MaxWidthWrapper>
      <S.Content>
        <section>
          <S.Title>Algo não está certo...</S.Title>
          <S.Description>
            A página que você está tentando abrir não existe. Você pode ter
            digitado incorretamente o endereço ou a página foi movido para outra
            URL. Se você acha que isso é um erro, entre em contato com o
            suporte.
          </S.Description>
          <S.ButtonContainer>
            <Button variant="outline" fullWidth onClick={() => navigate('/')}>
              Voltar para a página inicial
            </Button>
          </S.ButtonContainer>
        </section>
        <S.Img
          src={notFoundImg}
          alt="Uma mulher procurando por algo e não achando. O fundo da imagem é número 404"
          title="Ilustração do error 404 no servidor (Não encontrado), vetor criado por Storyset - www.freepik.com/vectors/server-error"
        />
      </S.Content>
    </MaxWidthWrapper>
  );
};
export default NotFound;
