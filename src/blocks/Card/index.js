import styled from 'styled-components';

import Image from './Image';
import Text from './Text';
import Title from './Title';
import Input from './Input';
import InputHr from './InputHr';

const Card = styled.div`
  position: absolute;
  top: 158px;
  width: 100%;
  height: 100%;
`;

Card.Image = Image;
Card.Text = Text;
Card.Title = Title;
Card.Input = Input;
Card.InputHr = InputHr;

export default Card;