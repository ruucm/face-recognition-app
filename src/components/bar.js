import React, { Component } from 'react';
import TweenLite from 'gsap';
import { log } from 'ruucm-util';


/**
 * SVG Bar
 * This component generates the base SVG
 * and sets up all the sub-components
 */

class Bar extends Component {

  componentDidUpdate(prevProps) {
    const { yellowSize } = this.props;
    if (prevProps.yellowSize === yellowSize) { return; }

    log('yellowSize - Bar', yellowSize)

    if (yellowSize < 30) {
      this.jelly();
    } else {
      // this.swooshReverse();
    }
  }

  jelly = () => {
    log('this._rect', this._rect)
    TweenLite.fromTo(this._rect, 20, 
      {
        backgroundColor: 'rgb(255, 39, 46)',
        scale: 5,
         left: -400
      },
      {
        scale: 1,
         left: 400,
         rotation: 360,
         repeat: -1, /* Aka infinite amount of repeats */
         yoyo: true /* Make it go back and forth */
      }
    );
  }

  render() {
    log('bar props', this.props)
    const { w, h, children, idx, yellowSize, clr } = this.props;
    const viewBox = [0, 0, w, h].join(' ');
    if (idx == 0 && yellowSize > 0)
      return (
        <rect
        x={ 0.1625 * w + (0.15 * w * idx) } y={ 0.25 * h }
        width={ 0.075 * w }
        height={ yellowSize }
        ref={ (c) => this._rect = c }
        fill='#F0625C' />
      )
    else
      return (
        <rect
          x={ 0.1625 * w + (0.15 * w * idx) } y={ 0.25 * h }
          width={ 0.075 * w }
          height={ 0.5 * h }
          ref={ (c) => this._rect = c }
          fill={ clr } />
      )}
}


// const Bar = ({ w, h, children }) => {
//   const viewBox = [0, 0, w, h].join(' ');

//   log('{ w, h, children }', { w, h, children })

//   return (
//     <svg version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       width="100%"
//       height="100%"
//       viewBox={ viewBox }
//       style={ styles }>
//       { children }
//     </svg>
//   );
// };

// Bar.propTypes = {
//   h: React.PropTypes.number,
//   w: React.PropTypes.number,
//   children: React.PropTypes.node,
// };

// const styles = { display: 'block' };

export default Bar;
