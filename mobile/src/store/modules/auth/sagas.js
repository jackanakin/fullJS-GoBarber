import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
//import history from '~/services/history';
import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        if (!user.provider) {
            Alert.alert('Erro no login', 'Usuário não é provider');
            return;
        }

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        yield put(signInSuccess(token, user));
        //history.push('/dashboard');
    } catch (err) {
        console.log(err)
        Alert.alert('Erro de autenticação', 'Houve erro no login');
        yield put(signInFailure());
    }
}

export function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;

        yield call(api.post, 'users', {
            name,
            email,
            password,
        });

        //history.push('/');
    } catch (err) {
        Alert.alert('Falha no cadastro', 'Verifique seus dados!');
        yield put(signInFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) {
        return;
    }

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
}

export function signOut() {
    //history.push('/');
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut),
]);
