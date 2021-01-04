import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    padding-left: 30px;
    color: #a6a6a6;
    font-size: clamp(20px, 4vw, 27px);
    width: clamp(20px, 70vw, 1200px);

    @media (max-width: 600px) {
        width: 90%;
        margin-block-end: 0px;
        padding-left: 5%;
        padding-right: 5%;
        margin-right: 0px;
        text-align: center;
    }
`;

const AboutMeSection = styled.div`
    font-size: 30px;
    @media (max-width: 600px) {
        margin-block-end: 0px;
        padding-left: 0px;
        padding-right: 0px;
        margin-right: 0px;
        text-align: center;
    }
`;

export default function AboutMe() {
    return (
        <AboutMeSection>
            <h2 className="section-heading">About me</h2>
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
                also like to stay active by playing sports with friends, cycling or running.
            </Paragraph>
        </AboutMeSection>
    );
}
