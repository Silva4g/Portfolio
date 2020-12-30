import React from 'react';
import { Fade } from '@egjs/flicking-plugins';
import { Container } from './styles';
import Card from '../../components/Cards';
import imagem from '../../assets/teste.png';

const Portfolio: React.FC = () => {
  const fade = [new Fade()];

  return (
    <Container gap={20} circular plugins={fade}>
      <Card
        data="26/12/2020"
        image={imagem}
        link="http://silva4g-portfolio.surge.sh/"
        title="Teste"
      >
        teste de como esta ficando
      </Card>
    </Container>
  );
};

export default Portfolio;
