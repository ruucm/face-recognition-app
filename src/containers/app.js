import React, { Component } from 'react';
import { connect } from 'react-redux';
import Canvas from '../components/canvas';
import { log } from 'ruucm-util';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';


import Header from '../components/Header';
import UrlForm from '../components/UrlForm';
import styled from 'styled-components';

const clrs = ['#FFE200', '#34A766', '#0072BB', '#DB3B43', '#FE7541'];

const IPhone8Wrapper = styled.section`
  max-width: 375px;
  margin: 0 auto;
`;


class App extends Component {

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    setTimeout(() => this.handleResize(), 300);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    log('render!')
    log('this.state', this.state)
    log('this.props', this.props)
    const { w, h, yellowSize } = this.props;
    return (
      <IPhone8Wrapper>
        <Header />
        <Canvas { ...this.props }>
          {
            clrs.map((clr, idx) => {
              log('yellowSize - render', yellowSize)
              if (idx == 0 && yellowSize > 0)
                return (
                  <rect key={ idx }
                  x={ 0.1625 * w + (0.15 * w * idx) } y={ 0.25 * h }
                  width={ 0.075 * w }
                  height={ yellowSize }
                  fill='#F0625C' />
                )
              else
                return (
                  <rect key={ idx }
                    x={ 0.1625 * w + (0.15 * w * idx) } y={ 0.25 * h }
                    width={ 0.075 * w }
                    height={ 0.5 * h }
                    fill={ clr } />
              );
            })
          }
        </Canvas>
        <UrlForm {...this.props} />
      </ IPhone8Wrapper>
    );
  }

  handleResize = () => {
    this.props.windowResize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

}

// App.propTypes = {
//   w: React.PropTypes.number,
//   h: React.PropTypes.number,
//   windowResize: React.PropTypes.func,
// };


function mapStateToProps(state) {
  return {
    w: state.canvas.get('w'),
    h: state.canvas.get('h'),
    yellowSize: state.canvas.get('yellowSize'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// export default connect((state) => state, mapDispatchToProps)(App);
