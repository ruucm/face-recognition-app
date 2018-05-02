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
        <Card.Input placeholder="http://img.of.awesome..." />
        <Card.InputHr />
        <Card.Button onClick={ () => submitTest(120) }></Card.Button>
      </Card>
    );
  }
}

export default UrlForm;
