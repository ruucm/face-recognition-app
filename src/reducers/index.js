import { combineReducers } from 'redux';
import canvas from './canvas';
import submitTest from './submitTest';
import submitUrl from './submitUrl';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  canvas,
  submitTest,
  submitUrl,
  form: reduxFormReducer,
});

export default rootReducer;
