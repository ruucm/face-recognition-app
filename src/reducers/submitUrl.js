import {
  SUBMIT_URL,
  FORM_CHANGE,
  SET_RESULT_DATA
} from '../constants';
// import { fromJS } from 'immutable';
import { log } from 'ruucm-util';
import { merge } from 'lodash';

const INITIAL_STATE = {
  isSubmitted: false,
  resultData: [],
};

function submitUrlReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SUBMIT_URL:
      let payload = !state.isSubmitted;
      return merge(state, {isSubmitted: payload});
    case FORM_CHANGE:
      return merge(state, {submittedUrl: action.payload});
    case SET_RESULT_DATA:
      return merge(state, {resultData: action.payload.resultData[0]});
    default:
      return state;
  }
}

export default submitUrlReducer;
