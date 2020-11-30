import React from 'react';
import Header from '../components/header';
import Container from '../components/container';
import styles from './index.module.css';
import ParticlesContainer from '../components/particles';

export default function Home() {
    return (
        <div style={{ position: 'relative' }}>
            <ParticlesContainer />
            <Container>
                <Header headerText="Hi, I'm Marco" />
                <p style={{ color: `white`, fontSize: `35px` }}>Welcome to my website</p>
                <div className={(styles.shapes, styles.float)}>
                    <div className={(styles.sqare, styles.spin)}></div>
                    <div className={(styles.circle, styles.spin)}></div>
                </div>

                <h3 style={{ color: `white`, fontSize: `72px`, paddingTop: '1200px' }}>Welcome to my website</h3>
            </Container>
        </div>
    );
}
