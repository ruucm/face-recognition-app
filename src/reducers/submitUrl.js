import {
  SUBMIT_URL,
  FORM_CHANGE,
  SET_RESULT_DATA
} from '../constants';
import { fromJS } from 'immutable';
import { log } from 'ruucm-util';
import { merge } from 'lodash';

const INITIAL_STATE = fromJS({
  isSubmitted: false,
  resultData: [],
});

function submitUrlReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SUBMIT_URL:
      let payload = !state.get('isSubmitted');
      return state.merge({isSubmitted: payload});
    case FORM_CHANGE:
      return state.merge({submittedUrl: action.payload});
    case SET_RESULT_DATA:
      let re = state.merge({resultData: action.payload.resultData[0]})
      return re;
    default:
      return state;
  }
}

export default submitUrlReducer;
