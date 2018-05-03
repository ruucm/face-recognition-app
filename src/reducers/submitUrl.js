import {
  SUBMIT_URL,
} from '../constants';
import { fromJS } from 'immutable';
import { log } from 'ruucm-util';

const INITIAL_STATE = fromJS({
  isSubmitted: false
});

function submitUrlReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SUBMIT_URL:
      let payload = !state.get('isSubmitted');
      return state.merge({isSubmitted: payload});

    default:
      return state;
  }
}

export default submitUrlReducer;
