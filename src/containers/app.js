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
    log('redner!')
    log('this.state', this.state)
    log('this.props', this.props)
    const { w, h } = this.props;
    return (
      <IPhone8Wrapper>
        <Header />
        <Canvas { ...this.props }>
          {
            clrs.map((clr, idx) => {
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
        <UrlForm />
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

App.propTypes = {
  w: React.PropTypes.number,
  h: React.PropTypes.number,
  windowResize: React.PropTypes.func,
};


function mapStateToProps(state) {
  return {
    w: state.canvas.w,
    h: state.canvas.h,
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
