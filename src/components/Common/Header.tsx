import React from 'react';
import styled from 'styled-components';
import Wallet from '../Wallet';
import { Link } from 'react-router-dom';

const HeaderFrame = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: var(--panel-background);
    border-bottom: 1px solid var(--panel-border);
`;

const HeaderElement = styled.div`
    margin: 19px 30px;
    display: flex;
    min-width: 0;
    display: flex;
    align-items: center;
`;

const AppName = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 1px;
    color: var(--app-header-text);
    margin-left: 12px;
`;
const ArbInfo = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 9px;
    letter-spacing: 1px;
    color: var(--app-header-text);
    margin-left: 12px;
    padding-right: 10px;
`;
const ArbTitle = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 9px;
    letter-spacing: 1px;
    color: var(--app-header-text);
    margin-left: 12px;
    padding-left: 10px;
`;

const StyledLink = styled(Link)`
    display: flex;
    text-decoration: none;
    align-items: center;
    cursor: pointer;
    height: 32px;
    img {
        font-size: 15px;
        font-weight: 500;
        height: 32px;
        width: 32px;
    }
`;

const Header = () => {
    return (
        <HeaderFrame>
            <HeaderElement>
                <StyledLink to={`/`}>
                    <img alt="pebbles" src="pebbles-pad.svg" />
                    <AppName>arBalancer</AppName>
                </StyledLink>
                <ArbTitle>Layer 2 port</ArbTitle>
            </HeaderElement>
            <HeaderElement>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://portal.arbitrum.io`}
                >
                    <ArbInfo>More dApps</ArbInfo>
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://faucet.arbitrum.io`}
                >
                    <ArbInfo>Token Faucet</ArbInfo>
                </a>
                &nbsp;
                <Wallet />
            </HeaderElement>
        </HeaderFrame>
    );
};

export default Header;
