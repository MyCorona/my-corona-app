import React, {FC} from 'react';
import styled from 'styled-components/native';
import {HalfSpace} from './Block';
import {UserEmojiField} from './UserEmojiField';
import {fontName} from '../lib/vars';

interface Props {
  emoji: string;
}

export const HelloUserHeader: FC<Props> = ({emoji}) => {
  return (
    <Container>
      <MyText>HELLO ANONYMOUS </MyText>
      <HalfSpace />
      <UserEmojiField emoji={emoji} />
    </Container>
  );
};

const MyText = styled.Text`
  font-family: ${fontName};
  color: #cdcdcd;
  font-weight: 600;
  font-size: 14px;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
