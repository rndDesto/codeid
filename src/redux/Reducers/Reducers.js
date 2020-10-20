import { combineReducers } from 'redux';
import homeReducer from '../../pages/Home/reducer';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
