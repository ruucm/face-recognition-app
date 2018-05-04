import React, { Component } from 'react';
import TweenLite from 'gsap';
import { log } from 'ruucm-util';
import styled from 'styled-components';
import { center } from '../../../styles/mixins';

const FaceBoxSvg = styled.svg`
  display: block;
  position: absolute;
  ${center('x')}
  z-index: 1;
`;

/**
 * SVG FaceBox
 * This component generates the base SVG
 * and sets up all the sub-components
 */
const FaceBox = ({ w, h, info }) => {
  const viewBox = [0, 0, w, h].join(' ');
  log('info'), info
  return (
    <FaceBoxSvg version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox={ viewBox }
    >
      {/* { children } */}
      <circle cx={w * (info.Left + info.Width/2)} cy={h * (info.Top + info.Height/2)} r={w * info.Width / 2} fill="#FEE333" />
    </ FaceBoxSvg>
  );
};

// FaceBox.propTypes = {
//   h: React.PropTypes.number,
//   w: React.PropTypes.number,
// };

export default FaceBox;
