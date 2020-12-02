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
    color: #4287f5;

    font-size: 25px;
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
        <div style={{ color: `#a6a6a6`, paddingTop: '100vh' }}>
            <div
                style={{
                    fontSize: `60px`,
                    color: `white`,
                    position: 'relative',
                    zIndex: '10 !important',
                    paddingBottom: '30px',
                }}
            >
                Work Experience
            </div>
            {jobsData &&
                jobsData.map(({ node }, i) => {
                    const { frontmatter, html } = node;
                    const { title, url, company, range } = frontmatter;

                    return (
                        <li key={i}>
                            <Experience>
                                <CompanyName href={url}>{company}</CompanyName>
                                <span> - {title}</span>
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
