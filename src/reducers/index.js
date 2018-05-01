import { combineReducers } from 'redux';
import canvas from './canvas';
import submitTest from './submitTest';

const rootReducer = combineReducers({
  canvas,
  submitTest,
});

export default rootReducer;
