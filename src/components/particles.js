import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';

const StyledParticlesContainer = styled.div`
    top: 0 !important;
    position: 'absolute';
    height: 100% !important;
    width: 100% !important;
`;

export default function ParticlesContainer({ isEnabled }) {
    return (
        <StyledParticlesContainer>
            <Particles
                style={{ position: 'absolute' }}
                params={{
                    particles: {
                        move: {
                            enable: isEnabled,
                        },
                        number: {
                            value: 150,
                        },
                        size: {
                            value: 3,
                        },
                    },
                    interactivity: {
                        detect_on: 'window',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse',
                            },
                        },
                    },
                }}
            />
        </StyledParticlesContainer>
    );
}
