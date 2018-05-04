import {
  SUBMIT_URL,
  FORM_CHANGE,
  SET_RESULT_DATA
} from '../constants';
import { fromJS } from 'immutable';
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
      var re = merge(state, {submittedUrl: action.payload});
      log('re', re)
      return re;
    case SET_RESULT_DATA:
      var re = merge(state, {resultData: action.payload.resultData[0]});
      log('return', re)
      return re;
    default:
      return state;
  }
}


// function submitUrlReducer(state = INITIAL_STATE, action = {}) {
//   switch (action.type) {
//     case SUBMIT_URL:
//       let payload = !state.get('isSubmitted');
//       return state.merge({isSubmitted: payload});
//     case FORM_CHANGE:
//       log('form value change!!', action.payload)
//       return state.merge({submittedUrl: action.payload});
//     case SET_RESULT_DATA:
//       // log('SET_RESULT_DATA!!', action.payload)
//       // log('state.get(resultData)', state.get('resultData'))
//       // let re = state.merge(action.payload);
//       // log('return', re)

//       // var payload2 = state.get('resultData') * 0.8
//       var payload2 = state.get('resultData') + action.payload
//       log('action.payload', action.payload.resultData[0])
//       // log('payload2', payload2)
//       let re = state.merge({resultData: action.payload.resultData[0]});
//       log('return', re)
//       return re;
//       // return state.merge({resultData: action.payload.resultData[0]});
//     default:
//       return state;
//   }
// }

export default submitUrlReducer;
