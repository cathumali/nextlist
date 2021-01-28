import { combineReducers } from "redux";
import { jobsReducer } from './jobsReducer';
import { memesReducer } from './memesReducer';

export default combineReducers({
  jobs          : jobsReducer,
  memes          : memesReducer,    
});
