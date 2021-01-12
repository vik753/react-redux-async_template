import { combineReducers } from "redux";
import postReducer from "./postReducer";
import alertReducer from './alertReducer';

const rootReducer = combineReducers({
  postState: postReducer,
  alertState: alertReducer,
});

export default rootReducer;
