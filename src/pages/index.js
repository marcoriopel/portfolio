import React from 'react';
import Header from '../components/header';
import Container from '../components/container';

export default function Home() {
    return (
        <Container>
            <Header headerText="Hi, I'm Marco" />
            <p style={{ color: `white`, fontSize: `40px` }}>Welcome to my website</p>
            <h3 style={{ color: `white`, fontSize: `72px`, paddingTop: '1200px' }}>Welcome to my website</h3>
        </Container>
    );
}
