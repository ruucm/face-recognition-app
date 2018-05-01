import {
  WINDOW_RESIZE,
} from '../constants';
import { fromJS } from 'immutable';
import { log } from 'ruucm-util';
import { merge } from 'lodash';

const INITIAL_STATE = {
  width: 100,
  height: 100,
  w: 100,
  h: 100,
};

function canvasReducer(state = INITIAL_STATE, action = {}) {

  // log('canvasReducer')
  // log('state', state)
  // log('action', action)
  log('return', merge(state, action.payload))

  switch (action.type) {

  case WINDOW_RESIZE:
    return merge(state, action.payload);

  default:
    return state;
  }
}

export default canvasReducer;
