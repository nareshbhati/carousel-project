import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk 	from "redux-thunk"

import carouselReducer from '../reducers/carouselReducer';


const store = createStore(
  combineReducers({
    carousel:  carouselReducer
  }),
  {},
applyMiddleware(thunk)
);
export default store;
