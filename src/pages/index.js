import React from 'react';
import Header from '../components/header';
import Container from '../components/container';
import AboutMe from '../components/about-me';
import WorkExperience from '../components/work-experience';
import ParticlesContainer from '../components/particles';

export default function Home() {
    return (
        <div style={{ position: 'relative' }}>
            <ParticlesContainer />
            <Container>
                <Header />
                <AboutMe />
                <WorkExperience />
            </Container>
        </div>
    );
}
