import React from 'react';
import { Text } from 'react-native';
// import { Container } from './styles';

import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function SignIn() {
    return (
        <Background>
            <Text>SignInss</Text>
            <Input icon="call" placeHolder="Digite seu nomex" />
            <Button>Entrar</Button>
        </Background>
    );
}
