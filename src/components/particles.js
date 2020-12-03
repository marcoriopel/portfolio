import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';

const StyledParticlesContainer = styled.div`
    top: 0 !important;
    position: absolute;
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
                            value: isEnabled ? 150 : 70,
                        },
                        size: {
                            value: 3,
                        },
                        opacity: {
                            value: isEnabled ? 0.6 : 0.2,
                            random: true, // Set to false in our case
                            anim: {
                                enable: isEnabled,
                                speed: 0.5,
                                sync: true,
                            },
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: '#fff',
                            opacity: isEnabled ? 0.6 : 0.2,
                        },
                    },

                    interactivity: {
                        detect_on: 'window',
                        events: {
                            onhover: {
                                enable: isEnabled,
                                mode: 'repulse',
                            },
                        },
                    },
                    background: {
                        image: '',
                        repeat: 'no-repeat',
                        size: 'cover',
                    },
                }}
            />
        </StyledParticlesContainer>
    );
}
