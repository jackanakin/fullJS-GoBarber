import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string()
        .min(6, 'Mínimo de 6 caracteres')
        .required('A senha é obrigatória'),
});

export default function SignIn() {
    const dispatch = useDispatch();

    function handleSubmit({ email, senha }) {
        dispatch(signInRequest(email, senha));
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input type="email" name="email" placeholder="Seu e-mail" />
                <Input
                    type="passowrd"
                    name="password"
                    placeholder="Sua senha"
                />

                <button type="submit">Acessar</button>
                <Link to="/register">Criar conta</Link>
            </Form>
        </>
    );
}
