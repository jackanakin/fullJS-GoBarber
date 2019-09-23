/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

import { store, persistor } from './store';

export default function Main() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
                <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            </PersistGate>
        </Provider>
    );
}
