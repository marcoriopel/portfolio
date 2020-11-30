import React from 'react';
import Header from '../components/header';
import Container from '../components/container';
import AboutMe from '../components/about-me';
import ParticlesContainer from '../components/particles';

export default function Home() {
    return (
        <div style={{ position: 'relative' }}>
            <ParticlesContainer />
            <Container>
                <Header headerText="Hi, I'm Marco" />
                <p style={{ color: `white`, fontSize: `35px` }}>Welcome to my website</p>
                <AboutMe />
            </Container>
        </div>
    );
}
