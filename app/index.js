/* eslint-disable react/jsx-filename-extension */
import React          from 'react';
import { render }     from 'react-dom';
import { Provider }   from 'react-redux';
import Main           from './containers/Main';
import configureStore from './store/configureStore';

const store = configureStore();
const mainElem = document.getElementById('app');

if (mainElem) {
    render(
        <Provider store={store}>
            <Main />
        </Provider>,
        document.getElementById('app'),
    );
}

if (module.hot) {
    module.hot.accept('containers/Main', () => {
        const NewRoot = Main;
        render(
            <Provider store={store}>
                <NewRoot store={store} />
            </Provider>,
            document.getElementById('app'),
        );
    });
}
