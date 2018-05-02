import React, { Component } from 'react';
import TweenLite from 'gsap';
import { log } from 'ruucm-util';


/**
 * SVG Canvas
 * This component generates the base SVG
 * and sets up all the sub-components
 */
const Canvas = ({ w, h, children }) => {
  const viewBox = [0, 0, w, h].join(' ');

  log('{ w, h, children }', { w, h, children })

  return (
    <svg version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox={ viewBox }
      style={ styles }>
      { children }
    </svg>
  );
};

Canvas.propTypes = {
  h: React.PropTypes.number,
  w: React.PropTypes.number,
  children: React.PropTypes.node,
};

const styles = { display: 'block' };

export default Canvas;
