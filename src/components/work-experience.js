import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Experience = styled.div`
    padding-left: 30px;
    padding-bottom: 40px;
    @media (max-width: 600px) {
        width: 450px;
        text-align: left;
    }
`;

const CompanyName = styled.a`
    width: 500;
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
    @media (max-width: 750px) {
        visibility: hidden;
    }
`;

const SmallRole = styled.div`
    padding-top: 5px;
    @media (min-width: 751px) {
        visibility: hidden;
    }
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
                        <li key={i} style={{ color: `#a6a6a6` }}>
                            <Experience>
                                <CompanyName href={url}>{company}</CompanyName>
                                <BigRole> - {title} </BigRole>
                                <SmallRole> - {title} - </SmallRole>
                                <h4 style={{ paddingLeft: '30px' }}>{range}</h4>
                                <div style={{ paddingLeft: '30px' }} dangerouslySetInnerHTML={{ __html: html }} />
                            </Experience>
                        </li>
                    );
                })}
        </div>
    );
};

export default WorkExperience;
