import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <AvatarInput name="avatar_id" />
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" placeholder="Email" type="email" />

                <hr></hr>

                <Input
                    name="oldPassword"
                    placeholder="Senha atual"
                    type="password"
                />
                <Input
                    name="password"
                    placeholder="Nova senha"
                    type="password"
                />
                <Input
                    name="confirmPassword"
                    placeholder="Confirmação da senha"
                    type="password"
                />

                <button type="submit">Atualizar perfil</button>
            </Form>

            <button onClick={handleSignOut} type="button">
                Sair do GoBarber
            </button>
        </Container>
    );
}
