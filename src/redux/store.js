
// ===== REDUX SAGA CONFIG ====
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './rootSagas';

const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare];

console.log("in store,js, process env: ", process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleWare.run(rootSagas)
export const persistor = persistStore(store);

export default { store, persistStore };

// ==== WITH REDUX THUNK CONFIG
// import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// import { persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';
// import rootReducer from './rootReducer';

// const middlewares = [thunk];

// if (process.env.NODE_ENV !== 'production') {
//     middlewares.push(logger);
// }

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// export const persistor = persistStore(store);

// export default { store, persistStore };
