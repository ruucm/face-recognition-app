import React, { Component } from 'react';
import { connect } from 'react-redux';
import Canvas from '../components/canvas';
import { log } from 'ruucm-util';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';

import Bar from '../components/bar';
import Header from '../components/Header';
import UrlForm from '../components/UrlForm';
import UrlFormBack from '../components/UrlFormBack';
import IPhone8Wrapper from '../components/Frames/IPhone8Wrapper';
import GiphySearch from '../components/GiphySearch';
import SpinLoad from '../components/SpinLoad';

import styled from 'styled-components';

const clrs = ['#FFE200', '#34A766', '#0072BB', '#DB3B43', '#FE7541'];

const FormWrapper = styled.section`
  position: relative;
  margin-top: ${props => (props.isSubmitted == true) ? '-160px' : '0'};
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
    const { w, h, yellowSize, isSubmitted } = this.props;
    return (
      <IPhone8Wrapper>
        <Header />
        <FormWrapper isSubmitted={isSubmitted}>
          <Canvas { ...this.props }>
            <UrlFormBack {...this.props} />
          </Canvas>
          <UrlForm {...this.props} />
        </FormWrapper>
        {/* <GiphySearch initialQuery="dog" RenderLoading={SpinLoad} /> */}
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
  log('state(mapStateToProps)', state)
  return {
    w: state.canvas.get('w'),
    h: state.canvas.get('h'),
    yellowSize: state.canvas.get('yellowSize'),
    isSubmitted: state.submitUrl.isSubmitted,
    submittedUrl: state.submitUrl.submittedUrl,
    resultData: state.submitUrl.resultData,
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
