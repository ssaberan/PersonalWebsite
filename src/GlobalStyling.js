import styled, { createGlobalStyle } from "styled-components";

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

export const StyledGlobalContainer = styled.div`
   z-index: 1;
   width: 100%;
   max-width: 1300px;
   margin-right: auto;
   margin-left: auto;
   padding-right: 50px;
   padding-left: 50px;

   @media screen and (max-width: 960px) {
      padding-right: 30px;
      padding-left: 30px;
   }
`;

export default GlobalStyling;
