import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { ICartState } from './modules/cart/types';
import rootReduce from './modules/rootReduce';
import rootSaga from './modules/rootSaga';

export interface IState {
    cart: ICartState
}

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]

const store = createStore(rootReduce,
    composeWithDevTools(
        applyMiddleware(...middleware)
    ));

 sagaMiddleware.run(rootSaga)

export default store;