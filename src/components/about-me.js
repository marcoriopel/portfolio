import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    padding-left: 30px;
    color: #a6a6a6;
    font-size: 27px;
    padding-right: 300px;
`;

export default function AboutMe() {
    return (
        <div style={{ color: `white`, fontSize: `30px` }}>
            <h2 style={{ color: `white`, fontSize: `60px`, paddingTop: '1000px' }}>About me</h2>
            <Paragraph>Hey! I'm Marco, a software engineering student at Polytechnique Montréal since 2018.</Paragraph>
            <Paragraph>
                I love to program applications that make an actual difference in people's lives. You can see some of my
                school and personal projects in the projects section of this website.
            </Paragraph>
            <Paragraph>
                I'm planning on graduating in May 2022 and my objective is to join a company in which I can make a real
                impact in people's lives.
            </Paragraph>
        </div>
    );
}
