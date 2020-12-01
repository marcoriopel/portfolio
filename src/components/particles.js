import React from 'react';
import Particles from 'react-particles-js';

export default function ParticlesContainer() {
    return (
        <Particles
            style={{ position: 'absolute' }}
            params={{
                particles: {
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
    );
}
