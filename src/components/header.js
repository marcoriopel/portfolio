import React from 'react';
import styled from 'styled-components';

const Blink = styled.span`
    @keyframes blink-empty {
        50% {
            border-left: 15px transparent;
        }
    }
    background-color: white;
    font: 28px Inconsolata, monospace;
    animation: blink-empty 1s infinite;
    border-left: transparent solid 15px;
    margin-left: 2px;
`;

const WelcomeMessage = styled.span`
    padding-left: 30px;
    color: #a6a6a6;
    font: 35px Inconsolata, monospace;
`;

const Presentation = styled.h1`
    color: white;
    font-size: 100px;
`;

export default function Header(props) {
    return (
        <>
            <Presentation>Hi, I'm Marc-Olivier</Presentation>
            <WelcomeMessage>Welcome to my website</WelcomeMessage>
            <Blink></Blink>
        </>
    );
}
