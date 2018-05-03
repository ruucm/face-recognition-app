import styled from 'styled-components';
import { center } from '../../styles/mixins';

const InputError = styled.span`
  ${center('x')}
  color: red;
  position: absolute;
  top: 200px;
`;

export default InputError;
