import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
.section-heading {
    color: white; 
    font-size: clamp(50px, 8vw, 60px); 
    clamp(25px, 6vw, 35px);
    padding-top: 100vh;
    @media (max-width: 600px) {
        text-align: center;
    }
}

li {
    margin-bottom: 3px;
}
`;

export default GlobalStyle;
