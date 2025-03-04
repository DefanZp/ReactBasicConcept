import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/reducer';
//import { successAddRestoMiddleware } from "./middleware/restoMiddleware";  

//export const middlewareEnhancer = applyMiddleware(successAddRestoMiddleware);
const store = createStore(rootReducer);

export default store;