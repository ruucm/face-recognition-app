import styled from 'styled-components';

// import Header from './Header';
import Image from './Image';
import Text from './Text';
import Title from './Title';
import Input from './Input';

const Card = styled.div`
  position: absolute;
  top: 158px;
  width: 100%;
  height: 100%;
`;

// Card.Header = Header;
Card.Image = Image;
Card.Text = Text;
Card.Title = Title;
Card.Input = Input;

export default Card;