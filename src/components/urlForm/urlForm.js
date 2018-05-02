import React, { Component } from 'react';
import { log } from 'ruucm-util';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 158px;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-family: Josefin Sans;
  font-weight: bold;
  line-height: 57px;
  font-size: 50px;
  letter-spacing: -0.04em;
  color: #283E4E;
  text-align: center;
  margin: 0;
`;

const Input = styled.h1`
`;

class UrlForm extends Component {
  render() {
    const { submitTest } = this.props;
    log('this.props(submitTest)', this.props)
    return (
      <Wrapper>
        <Title>enter url here</Title>
        <Input />
        <button onClick={ () => submitTest(120) }>Test button</button>
      </Wrapper>
    );
  }
}

export default UrlForm;
