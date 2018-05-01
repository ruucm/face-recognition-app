import React, { Component } from 'react';
import { log } from 'ruucm-util';
// import styled from 'styled-components';

class UrlForm extends Component {
  render() {
    const { submitTest } = this.props;
    log('this.props(submitTest)', this.props)
    return (
      <div>
        UrlForm

        <button onClick={ () => submitTest(120) }>Test button</button>
      </div>
    );
  }
}

export default UrlForm;
