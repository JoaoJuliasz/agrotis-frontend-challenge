import React from 'react';
import logo from '../../agrotis-logo.png'
import { HeaderContainer, HeaderImg } from './Header.styles'
const Header = () => {
    return (
        <HeaderContainer>
            <HeaderImg to='/'><img src={logo} alt="logo" /></HeaderImg>
        </HeaderContainer>
    );
};

export default Header;