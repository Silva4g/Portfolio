import React from 'react';
import { Content, Description, Data, Image, Title } from './styles';

interface Props {
  image: string;
  title: string;
  data: string;
  link: string;
}

const Cards: React.FC<Props> = ({ image, title, data, children, link }) => {
  return (
    <Content>
      <Image style={{ backgroundImage: `url(${image})` }} />
      <Title>{title}</Title>
      <a href={link}>oi</a>
      <Description>{children}</Description>
      <Data>{data}</Data>
    </Content>
  );
};

export default Cards;
