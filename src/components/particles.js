import React from 'react';
import Particles from 'react-particles-js';

export default function ParticlesContainer() {
    return (
        <Particles
            style={{ position: 'absolute', zIndex: '0' }}
            params={{
                particles: {
                    number: {
                        value: 75,
                    },
                    size: {
                        value: 3,
                    },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse',
                        },
                    },
                },
            }}
        />
    );
}
