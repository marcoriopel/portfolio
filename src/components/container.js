import React from 'react';
import containerStyles from './container.module.css';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    margin: 3rem auto;
    color: 'white';
    padding-left: clamp(50px, 15vw, 300px);
    position: relative;
    padding-top: 200px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
`;

export default function Container({ children }) {
    return <ContainerStyle className={containerStyles.container}>{children}</ContainerStyle>;
}
