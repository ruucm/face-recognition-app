import React, { Component } from 'react';
// import styled from 'styled-components';

class UrlForm extends Component {
  render() {
    const { submitTest } = this.props;
    return (
      <div>
        UrlForm

        <button onClick={ submitTest }>Test button</button>
      </div>
    );
  }
}

export default UrlForm;
