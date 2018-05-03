import { combineReducers } from 'redux';
import canvas from './canvas';
import submitTest from './submitTest';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  canvas,
  submitTest,
  form: reduxFormReducer,
});

export default rootReducer;
