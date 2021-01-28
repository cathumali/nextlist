// import {createStore} from 'redux';
// import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";


// const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
// const enhancer = composeEnhancers(
//   applyMiddleware(thunk)
// );

const store = createStore(rootReducer, applyMiddleware(thunk));
// const store = createStore(rootReducer);

export default store;


