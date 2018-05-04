import {
  WINDOW_RESIZE,
  SUBMIT_TEST,
} from '../constants';
import { fromJS } from 'immutable';
import { log } from 'ruucm-util';

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
      log('WINDOW_RESIZE!')
      let re = state.merge(action.payload);
      log('re!', re)
      return re;
    
    case SUBMIT_TEST:
      var payload = (state.get('yellowSize') * 0.8 < 20) ? (100) : (state.get('yellowSize') * 0.8)
      log('payload', payload)
      return state.merge({yellowSize: payload});

    default:
      return state;
  }
}

export default canvasReducer;
