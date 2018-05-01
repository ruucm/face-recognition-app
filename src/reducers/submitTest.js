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
});

function submitTestReducer(state = INITIAL_STATE, action = {}) {
  log('action.payload', action.payload)
  switch (action.type) {

  case WINDOW_RESIZE:
    return state.merge(action.payload);
  
  case SUBMIT_TEST:
    return state.merge(action.payload);

  default:
    return state;
  }
}

export default submitTestReducer;
