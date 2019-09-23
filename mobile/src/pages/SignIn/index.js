import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import logo from '../../assets/logo.png';

import {
    Container,
    SignLink,
    SignLinkText,
    FormInput,
    Form,
    SubmitButton,
} from './styles';
import Background from '../../components/Background';
import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn({ navigation }) {
    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const passwordRef = useRef();

    function handleSubmit() {
        dispatch(signInRequest(email, password));
    }

    return (
        <Background>
            <Container>
                <Image source={logo} />

                <Form>
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="words"
                        placeholder="Digite seu e-mail"
                        returnKeyType="next"
                        value={email}
                        onChangeText={setEmail}
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Sua senha"
                        ref={passwordRef}
                        returnKeyType="send"
                        value={password}
                        onChangeText={setPassword}
                        onSubmitEditing={handleSubmit}
                    />

                    <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
                </Form>

                <SignLink onPress={() => navigation.navigate('SignUp')}>
                    <SignLinkText>Criar conta</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
