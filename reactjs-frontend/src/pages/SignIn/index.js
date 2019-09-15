import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignIn() {
    function handleSubmit(data) {
        console.log(data)
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form onSubmit={handleSubmit}>
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
