import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import sentImage from "../../../images/sent.svg";

const StyledPage = styled.div`
   display: block;
   margin: auto;
   text-align: center;
   color: white;
   padding: 20px;
`;

const StyledBackground = styled.div`
   background: #101522;
   background-image: linear-gradient(#164d69, #101522);
   top: 0;
   bottom: 0;
   margin: auto;
`;

const StyledImage = styled.img`
   padding: 0;
   display: block;
   margin: 0 auto;
   max-height: 100%;
   max-width: 100%;
`;

const Sent = () => {
   return (
      <>
         <Helmet>
            <title>Email Sent</title>
         </Helmet>
         <StyledBackground>
            <StyledPage>
               <h1>Sent!</h1>
               <StyledImage src={sentImage} />
            </StyledPage>
         </StyledBackground>
      </>
   );
};

export default Sent;
