import {
    applyMiddleware,
    createStore,
    compose }      from 'redux';
import thunk       from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

    if (module.hot) {
        module.hot.accept('reducers', () => {
            const nextRootReducer = rootReducer;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
