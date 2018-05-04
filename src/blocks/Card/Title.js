import styled, { css } from 'styled-components';
import { center } from '../../styles/mixins';

const Title = styled.h1`
  font-family: Josefin Sans;
  font-weight: bold;
  line-height: 57px;
  font-size: 50px;
  letter-spacing: -0.04em;
  color: #283E4E;
  text-align: center;
  margin: 0;
  margin-top: ${props => props.marginTop};
  ${props => props.loading && css`
    font-size: 36px;
    ${center('xy')}
    position: absolute;
    letter-spacing: 4px;
    height: 0;
  `}
`;

export default Title;
