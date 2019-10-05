import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { updateProfileFailure, updateProfileSuccess } from './actions';

export function* updateProfile({ payload }) {
    try {
        const { name, email, ...rest } = payload.data;

        const profile = Object.assign(
            { name, email },
            rest.oldPassword ? rest : {}
        );

        const response = yield call(api.put, 'users', profile);

        Alert.alert('Perfil atualizado!', 'Parabéns');
        console.log("vai atualizar perfil agora")
        yield put(updateProfileSuccess(response.data));
    } catch (err) {
        console.log(err)
        Alert.alert('Erro no perfil', 'Erro ao atualizar perfil!');
        yield put(updateProfileFailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
