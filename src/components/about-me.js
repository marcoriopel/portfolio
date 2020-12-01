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
            <h2 style={{ color: `white`, fontSize: `60px`, paddingTop: '100vh' }}>About me</h2>
            <Paragraph>Hey! I'm Marco, a software engineering student at Polytechnique Montréal since 2018.</Paragraph>
            <Paragraph>
                I love the industry in which I'm working and studying everyday because the innovation possibilities are
                endless and these innovations change the way billions of people live.
            </Paragraph>
            <Paragraph>
                I'm planning on graduating in May 2022 and my objective is to join a company in which I can make a real
                impact on people's lives.
            </Paragraph>
            <Paragraph>
                In my free time I like to work on various personal projects that allow me to learn new technologies. I
                also like to stay active by playing sports with friends, doing a cycling training or taking a run.
            </Paragraph>
        </div>
    );
}
