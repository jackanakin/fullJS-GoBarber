import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logoColored.svg';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="GoBarber" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong>Diego Fernandes</strong>
                            <Link to="/profile">Meu Perfil</Link>
                        </div>
                        <img src={logo} alt="Alguém" />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
