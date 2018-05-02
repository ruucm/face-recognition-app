import React, { Component } from 'react';
import { log } from 'ruucm-util';
import Card from '../../blocks/Card';


class UrlForm extends Component {
  render() {
    const { submitTest } = this.props;
    log('this.props(submitTest)', this.props)
    return (
      <Card>
        <Card.Title>enter url here</Card.Title>
        <button onClick={ () => submitTest(120) }>Test button</button>
      </Card>
    );
  }
}

export default UrlForm;
