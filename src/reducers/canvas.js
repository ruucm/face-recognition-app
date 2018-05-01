import {
  WINDOW_RESIZE,
  SUBMIT_TEST,
} from '../constants';
import { fromJS } from 'immutable';
import { log } from 'ruucm-util';
// import { merge } from 'lodash';

// const INITIAL_STATE = {
//   width: 100,
//   height: 100,
//   w: 100,
//   h: 100,
//   yellowSize: 100,
// };

// function canvasReducer(state = INITIAL_STATE, action = {}) {

//   // log('canvasReducer')
//   log('state', state)
//   log('action', action)
//   // log('return', merge(state, {yellowSize: state.yellowSize * 0.8}))

//   log('state.yellowSize * 0.1', state.yellowSize * 0.1)

//   switch (action.type) {

//   case WINDOW_RESIZE:
//     return merge(state, action.payload);
  
//   case SUBMIT_TEST:
//     return merge(state, {yellowSize: state.yellowSize * 0.1});

//   default:
//     return state;
//   }
// }



const INITIAL_STATE = fromJS({
  width: 100,
  height: 100,
  w: 10,
  h: 10,
  yellowSize: 100,
});

function canvasReducer(state = INITIAL_STATE, action = {}) {
  log('canvasReducer')
  log('state', state)
  log('action', action)

  switch (action.type) {

    case WINDOW_RESIZE:
      return state.merge(action.payload);
    
    case SUBMIT_TEST:
      var payload = (state.get('yellowSize') * 0.8 < 20) ? (100) : (state.get('yellowSize') * 0.8)
      log('payload', payload)
      return state.merge({yellowSize: payload});

    default:
      return state;
  }
}

export default canvasReducer;
