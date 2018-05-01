import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 92px 28px 38px 28px;
  background: #F1635A;
`;
const Title = styled.h1`
  font-family: Titan One;
  color: #283E4E;
  font-size: 35px;
  line-height: 115%;
  margin: 0;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Face Recog</Title>
        <Title>-nition</Title>
      </Wrapper>
    );
  }
}

export default Header;
