import styled from 'styled-components';

const Here = styled.h1`
  font-family: Josefin Sans;
  font-style: italic;
  font-weight: bold;
  line-height: 23px;
  font-size: 20px;
  color: #FEE333;
  position: absolute;
  z-index: 1;
  left: ${props => (props.left + 60) + 'px'};
  top: ${props => props.top + 'px'};
`;

export default Here;
