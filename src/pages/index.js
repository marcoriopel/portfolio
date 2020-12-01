import React from 'react';
import Header from '../components/header';
import Container from '../components/container';
import AboutMe from '../components/about-me';
import WorkExperience from '../components/work-experience';
import ParticlesContainer from '../components/particles';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import Head from '../components/head';

const StyledMainContainer = styled.main`
    min-height: 475vh;
    position: absolute;
`;

export default function Home() {
    return (
        <StyledMainContainer>
            <Head />
            <ParallaxProvider>
                <ParticlesContainer />
                <Parallax y={[-10, 20]}>
                    <Container>
                        <Header />
                        <AboutMe />
                        <WorkExperience />
                    </Container>
                </Parallax>
            </ParallaxProvider>
        </StyledMainContainer>
    );
}
