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
import useWindowSize from '../hooks/useWindowSize';
import GlobalStyles from '../components/styles/GlobalStyles';

const StyledMainContainer = styled.main`
    min-height: 475vh;
    position: absolute;
    min-width: 98vw;
`;

export default function Home() {
    const { width } = useWindowSize();

    return (
        <StyledMainContainer>
            <GlobalStyles />
            <Head />
            <ParallaxProvider>
                <ParticlesContainer isEnabled={width > 600} />
                <Parallax y={[-10, 20]} disabled={width <= 600}>
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
