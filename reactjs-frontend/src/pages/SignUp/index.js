import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignUp() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="passowrd"
                    type="passowrd"
                    placeholder="Sua senha"
                />

                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho login</Link>
            </Form>
        </>
    );
}