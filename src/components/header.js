import React from 'react';
import styled from 'styled-components';

const Blink = styled.span`
    @keyframes blink-empty {
        50% {
            border-left: 15px transparent;
        }
    }
    background-color: white;
    font: Inconsolata, monospace;
    font-size: clamp(23px, 5vw, 28px);
    animation: blink-empty 1s infinite;
    border-left: transparent solid 15px;
    margin-left: 2px;
`;

const WelcomeMessage = styled.span`
    padding-left: 5vw;
    color: #a6a6a6;
    font: Inconsolata, monospace;
    font-size: clamp(25px, 6vw, 35px);

    @media (max-width: 600px) {
        padding-left: 15vw;
        text-align: left;
    }

    @media (max-width: 400px) {
        padding-left: 30vw;
        text-align: left;
    }
`;

const Presentation = styled.h1`
    color: white;
    font-size: clamp(50px, 8vw, 100px);

    @media (max-width: 600px) {
        text-align: center;
    }
`;

export default function Header() {
    return (
        <>
            <Presentation>Hi, I'm Marc-Olivier</Presentation>
            <WelcomeMessage>Welcome to my website</WelcomeMessage>
            <Blink></Blink>
        </>
    );
}
