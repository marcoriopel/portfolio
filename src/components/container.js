import React from 'react';
import containerStyles from './container.module.css';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    margin: 3rem auto;
    color: white;
    top: 0;
    padding-left: clamp(30px, 10vw, 300px);
    position: relative;
    padding-top: 200px;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 600px) {
        padding-left: 0px;
        padding-right: 0px;
        margin: 0;
    }
`;

export default function Container({ children }) {
    return <ContainerStyle className={containerStyles.container}>{children}</ContainerStyle>;
}
