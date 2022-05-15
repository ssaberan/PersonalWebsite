import { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "DejaVu Sans Mono", monospace;
}

body {
   background: #142247;
 }
`;

export default GlobalStyling;
