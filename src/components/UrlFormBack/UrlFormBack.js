import React, { Component } from 'react';
import { log } from 'ruucm-util';
// import styled from 'styled-components';

class UrlFormBack extends Component {

  componentDidMount() {
  }
  roundedRect(x, y, width, height, radius) {
    return "M" + (x + radius/2) + " " + y + " "
      + "L" + (width - radius/2) + " " + y + " "
      + "Q" + (x + width) + " " + y + " " + (x + width) + " " + (y + radius/2) + " "
      + "L" + (x + width) + " " + (y + height - radius/2) + " "
      + "Q" + (x + width) + " " + (y + height) + " " + (x + width - radius/2) + " " + (y + height) + " "
      + "L" + (x + radius/2) + " " + (y + height) + " "
      + "Q" + x + " " + (y + height) + " " + x + " " + (y + height - radius/2) + " "
      + "L" + x + " " + (y + radius/2) + " "
      + "Q" + x + " " + y + " " + (x + radius/2) + " " + y
  }
  render() {
    const { w, h, children, idx, yellowSize, clr } = this.props;
    return (
      <g id="Canvas" fill="none">
        <g id="content">
        <path d={this.roundedRect(0, 0, w, h, 21)} fill="white"/>
        </g>
      </g>
    );
  }
}

export default UrlFormBack;
