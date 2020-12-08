import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Experience = styled.div`
    padding-left: 30px;
    width: 80%;
    padding-bottom: 40px;
    @media (max-width: 600px) {
        text-align: left;
    }
`;

const CompanyName = styled.a`
    width: auto;
    color: #4287f5;
    font-size: clamp(20px, 4vw, 25px);
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    position: relative;
    :after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: '';
        display: block;
        height: 2px;
        left: 50%;
        position: relative;
        background: #4287f5;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    :hover:after {
        width: 100%;
        left: 0;
    }
`;

const BigRole = styled.span`
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    @media (max-width: 750px) {
        display: none;
    }
`;

const SmallRole = styled.div`
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    @media (min-width: 751px) {
        display: none;
    }
`;

const WorkDates = styled.h4`
    padding-left: clamp(15px, 4vw, 30px);
    margin-block-start: clamp(0.1em, 1vh, 1.33em);
    margin-block-end: clamp(0.1em, 1vh, 1.33em);
`;

const WorkDesc = styled.div`
    padding-left: clamp(10px, 2vw, 30px);
    width: 80%;
    line-height: 1.33em;
`;

const WorkExperience = () => {
    const data = useStaticQuery(graphql`
        query {
            jobs: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/jobs/" } }
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            company
                            location
                            range
                            url
                        }
                        html
                    }
                }
            }
        }
    `);

    const jobsData = data.jobs.edges;

    return (
        <div>
            <h2 className="section-heading">Work Experience</h2>
            {jobsData &&
                jobsData.map(({ node }, i) => {
                    const { frontmatter, html } = node;
                    const { title, url, company, range } = frontmatter;

                    return (
                        <div key={i} style={{ color: `#a6a6a6` }}>
                            <Experience>
                                <CompanyName href={url}>{company}</CompanyName>
                                <BigRole> - {title} </BigRole>
                                <SmallRole> - {title} - </SmallRole>
                                <WorkDates>{range}</WorkDates>
                                <WorkDesc dangerouslySetInnerHTML={{ __html: html }} />
                            </Experience>
                        </div>
                    );
                })}
        </div>
    );
};

export default WorkExperience;
