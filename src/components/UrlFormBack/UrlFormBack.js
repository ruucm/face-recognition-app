import React, { Component } from 'react';
import { log } from 'ruucm-util';
// import styled from 'styled-components';

class UrlFormBack extends Component {

  roundedRect(x, y, width, height, radius) {
    return "M" + (x + radius/4) + " " + y + " "
      + "L" + (width - radius/4) + " " + y + " "
      + "Q" + (x + width) + " " + y + " " + (x + width) + " " + (y + radius/4) + " "
      + "L" + (x + width) + " " + (y + height - radius/4) + " "
      + "Q" + (x + width) + " " + (y + height) + " " + (x + width - radius/4) + " " + (y + height) + " "
      + "L" + (x + radius/4) + " " + (y + height) + " "
      + "Q" + x + " " + (y + height) + " " + x + " " + (y + height - radius/4) + " "
      + "L" + x + " " + (y + radius/4) + " "
      + "Q" + x + " " + y + " " + (x + radius/4) + " " + y
  }
  topRoundedRect(x, y, width, height, radius) {
    return "M" + (x + radius/4) + " " + y + " "
      + "L" + (width - radius/4) + " " + y + " "
      + "Q" + (x + width) + " " + y + " " + (x + width) + " " + (y + radius/4) + " "
      + "L" + (x + width) + " " + (y + height) + " "
      // + "Q" + (x + width) + " " + (y + height) + " " + (x + width - radius/4) + " " + (y + height) + " "
      + "L" + x + " " + (y + height) + " "
      // + "Q" + x + " " + (y + height) + " " + x + " " + (y + height - radius/4) + " "
      + "L" + x + " " + (y + radius/4) + " "
      + "Q" + x + " " + y + " " + (x + radius/4) + " " + y
  }
  render() {
    const { w, h, children, idx, yellowSize, clr } = this.props;
    return (
      <g id="Canvas" fill="none">
        <g id="content">
        <path d={this.topRoundedRect(0, 0, w, h, 21)} fill="white"/>
        </g>
      </g>
    );
  }
}

export default UrlFormBack;
